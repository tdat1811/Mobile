import React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePhone } from "../api/usePhones";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { Stars } from "../components/Stars";
import { PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { useFavorites } from "../context/FavoritesContext";
import { usePalette } from "../context/SettingsContext";
import type { ShopProps } from "../navigation/types";

// Màn "Product" của Bài 1, nhận id từ Bài 4, dữ liệu từ API (Bài 2)
export function ProductDetailsScreen({ navigation, route }: ShopProps<"ProductDetails">) {
  const { id, color: picked } = route.params;
  const { phone, error, reload } = usePhone(id);
  const { has, toggle } = useFavorites();
  const p = usePalette();

  if (error && !phone) return <ErrorBox message={error} onRetry={reload} />;
  if (!phone) return <Loading />;

  const shown = picked ?? phone.defaultColor;
  const saved = has(phone.id);

  return (
    <SafeAreaView edges={["bottom"]} style={[styles.root, { backgroundColor: p.card }]}>
      <View style={styles.imageWrap}>
        <Image source={PHONE_COLORS[shown].image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.info}>
        <Text style={[styles.name, { color: p.text }]}>{phone.name}</Text>
        <View style={styles.row}><Stars value={phone.rating} /><Text style={[styles.review, { color: p.muted }]}>(Xem {phone.reviewCount} đánh giá)</Text></View>
        <View style={styles.row}>
          <Text style={[styles.price, { color: p.text }]}>{formatPrice(phone.price)}</Text>
          <Text style={[styles.oldPrice, { color: p.muted }]}>{formatPrice(phone.oldPrice)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badge}>{phone.badge}</Text>
          <View style={[styles.help, { borderColor: p.muted }]}><Text style={[styles.helpText, { color: p.muted }]}>?</Text></View>
        </View>

        <Pressable
          style={[styles.chooseBtn, { borderColor: p.line }]}
          onPress={() => navigation.navigate("ChooseColor", { id: phone.id, color: picked })}
        >
          <Text style={[styles.chooseText, { color: p.text }]}>{picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}</Text>
          <Text style={[styles.chevron, { color: p.text }]}>{">"}</Text>
        </Pressable>

        <Pressable style={[styles.favBtn, saved && styles.favBtnOn]} onPress={() => toggle(phone.id)}>
          <Text style={[styles.favText, saved && styles.favTextOn]}>{saved ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.buyBtn}
        onPress={() => Alert.alert("Chọn mua", `${phone.name.split(" - ")[0]} — màu ${PHONE_COLORS[shown].label}`)}
      >
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 16 },
  imageWrap: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 12 },
  image: { width: "80%", height: "100%" },
  info: { paddingBottom: 12 },
  name: { fontSize: 15, fontWeight: "500" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 8, gap: 8 },
  review: { fontSize: 13 },
  price: { fontSize: 18, fontWeight: "700" },
  oldPrice: { fontSize: 14, textDecorationLine: "line-through" },
  badge: { fontSize: 12, fontWeight: "700", color: colors.red },
  help: { width: 16, height: 16, borderRadius: 8, borderWidth: 1, alignItems: "center", justifyContent: "center" },
  helpText: { fontSize: 10, fontWeight: "700" },
  chooseBtn: { marginTop: 16, height: 44, borderWidth: 1, borderRadius: 6, alignItems: "center", justifyContent: "center" },
  chooseText: { fontSize: 14, fontWeight: "500" },
  chevron: { position: "absolute", right: 12, fontSize: 18 },
  favBtn: { marginTop: 10, height: 44, borderRadius: 6, borderWidth: 1, borderColor: colors.red, alignItems: "center", justifyContent: "center" },
  favBtnOn: { backgroundColor: colors.red },
  favText: { color: colors.red, fontWeight: "700" },
  favTextOn: { color: "#fff" },
  buyBtn: { height: 48, marginBottom: 8, backgroundColor: colors.red, borderRadius: 6, alignItems: "center", justifyContent: "center" },
  buyText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});

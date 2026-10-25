import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePhone } from "../api/usePhones";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { COLOR_ORDER, PHONE_COLORS } from "../data/phones";
import { ColorKey } from "../types";
import { colors, formatPrice } from "../theme";
import { usePalette } from "../context/SettingsContext";
import type { ShopProps } from "../navigation/types";

export function ChooseColorScreen({ navigation, route }: ShopProps<"ChooseColor">) {
  const { id } = route.params;
  const { phone, error, reload } = usePhone(id);
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params.color);
  const p = usePalette();

  if (error && !phone) return <ErrorBox message={error} onRetry={reload} />;
  if (!phone) return <Loading />;

  const [line1, line2] = phone.name.split(" - ");     // "Điện Thoại Vsmart Joy 3" / "Hàng chính hãng"

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: p.card }]} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Image source={PHONE_COLORS[picked ?? phone.defaultColor].image} style={styles.thumb} resizeMode="contain" />
        <View style={styles.headerText}>
          <Text style={[styles.small, { color: p.text }]}>{line1}</Text>
          {line2 ? <Text style={[styles.small, { color: p.text }]}>{line2}</Text> : null}
          {picked && (
            <>
              <Text style={[styles.small, { color: p.text }]}>Màu: <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text></Text>
              <Text style={[styles.small, { color: p.text }]}>Cung cấp bởi <Text style={styles.bold}>{phone.supplier}</Text></Text>
              <Text style={[styles.price, { color: p.text }]}>{formatPrice(phone.price)}</Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable key={key} onPress={() => setPicked(key)}
              style={[styles.swatch, { backgroundColor: PHONE_COLORS[key].hex }, picked === key && styles.swatchOn]} />
          ))}
        </View>
        <Pressable
          style={styles.doneBtn}
          onPress={() => navigation.navigate("ProductDetails", { id: phone.id, color: picked }, { merge: true, pop: true })}
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: { flexDirection: "row", padding: 12, gap: 12 },
  thumb: { width: 84, height: 100 },
  headerText: { flex: 1, justifyContent: "flex-start", gap: 2 },
  small: { fontSize: 12 },
  bold: { fontWeight: "700" },
  price: { fontSize: 14, fontWeight: "700", marginTop: 4 },
  body: { flex: 1, backgroundColor: colors.grey, padding: 12 },
  hint: { fontSize: 13, color: colors.text },
  swatches: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  swatch: { width: 85, height: 80, borderWidth: 3, borderColor: "transparent" },
  swatchOn: { borderColor: colors.navy },
  doneBtn: { height: 40, backgroundColor: colors.blue, borderRadius: 4, alignItems: "center", justifyContent: "center" },
  doneText: { color: "#fff", fontWeight: "700" },
});

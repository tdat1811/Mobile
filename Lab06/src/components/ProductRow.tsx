import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { PHONE_COLORS } from "../data/phones";
import { Phone } from "../types";
import { colors, formatPrice } from "../theme";
import { usePalette } from "../context/SettingsContext";

export function ProductRow({ phone, onPress }: { phone: Phone; onPress: () => void }) {
  const p = usePalette();
  return (
    <Pressable style={[styles.row, { backgroundColor: p.card, borderColor: p.line }]} onPress={onPress}>
      <Image source={PHONE_COLORS[phone.defaultColor].image} style={styles.thumb} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={[styles.name, { color: p.text }]} numberOfLines={2}>{phone.name.split(" - ")[0]}</Text>
        <Text style={styles.price}>{formatPrice(phone.price)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: 8, borderWidth: 1 },
  thumb: { width: 48, height: 60 },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: "600" },
  price: { marginTop: 4, color: colors.red, fontWeight: "700" },
});

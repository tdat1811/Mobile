import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
import { usePalette } from "../context/SettingsContext";

export function ErrorBox({ message, onRetry }: { message: string; onRetry: () => void }) {
  const p = usePalette();
  return (
    <View style={[styles.center, { backgroundColor: p.bg }]}>
      <Text style={[styles.title, { color: p.text }]}>Đã có lỗi xảy ra</Text>
      <Text style={[styles.message, { color: p.muted }]}>{message}</Text>
      <Pressable style={styles.btn} onPress={onRetry}>
        <Text style={styles.btnText}>THỬ LẠI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 18, fontWeight: "700" },
  message: { marginTop: 8, textAlign: "center" },
  btn: { marginTop: 20, backgroundColor: colors.red, borderRadius: 6, paddingVertical: 12, paddingHorizontal: 28 },
  btnText: { color: "#fff", fontWeight: "700" },
});

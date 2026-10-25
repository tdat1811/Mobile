import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
import { usePalette } from "../context/SettingsContext";

export function Loading() {
  const p = usePalette();
  return (
    <View style={[styles.center, { backgroundColor: p.bg }]}>
      <ActivityIndicator size="large" color={colors.red} />
      <Text style={[styles.text, { color: p.muted }]}>Đang tải...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { marginTop: 12, fontSize: 15 },
});

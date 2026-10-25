import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
import { usePalette } from "../context/SettingsContext";

export function ProfileScreen() {
  const p = usePalette();
  const name = "Nguyễn Văn An";
  return (
    <View style={[styles.center, { backgroundColor: p.bg }]}>
      <View style={styles.avatar}><Text style={styles.avatarText}>{name.split(" ").pop()?.charAt(0)}</Text></View>
      <Text style={[styles.name, { color: p.text }]}>{name}</Text>
      <Text style={{ marginTop: 4, color: p.muted }}>an.nguyen@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.blue, alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#fff", fontSize: 40, fontWeight: "700" },
  name: { marginTop: 16, fontSize: 24, fontWeight: "700" },
});

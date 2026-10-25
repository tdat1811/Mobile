import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { usePalette, useSettings } from "../context/SettingsContext";

export function SettingsScreen() {
  const { notify, setNotify, dark, setDark } = useSettings();
  const p = usePalette();
  return (
    <View style={[styles.root, { backgroundColor: p.bg }]}>
      <View style={styles.line}>
        <Text style={[styles.label, { color: p.text }]}>Nhận thông báo</Text>
        <Switch value={notify} onValueChange={setNotify} />
      </View>
      <View style={styles.line}>
        <Text style={[styles.label, { color: p.text }]}>Chế độ tối</Text>
        <Switch value={dark} onValueChange={setDark} />
      </View>
      <Text style={[styles.status, { color: p.muted }]}>
        Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  line: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14 },
  label: { fontSize: 16 },
  status: { marginTop: 24 },
});

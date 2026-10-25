import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { Phone } from "../types";
import { ProductRow } from "./ProductRow";
import { usePalette } from "../context/SettingsContext";

export function PhoneList({ data, onPressItem, emptyText }: {
  data: Phone[];
  onPressItem: (phone: Phone) => void;
  emptyText: string;
}) {
  const p = usePalette();
  return (
    <FlatList
      data={data}
      keyExtractor={(x) => x.id}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      ListEmptyComponent={<Text style={[styles.empty, { color: p.muted }]}>{emptyText}</Text>}
      renderItem={({ item }) => <ProductRow phone={item} onPress={() => onPressItem(item)} />}
    />
  );
}

const styles = StyleSheet.create({
  empty: { textAlign: "center", marginTop: 32 },
});

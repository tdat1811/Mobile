import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { usePhones } from "../api/usePhones";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { PhoneList } from "../components/PhoneList";
import { usePalette } from "../context/SettingsContext";
import type { TabProps } from "../navigation/types";

export function SearchScreen({ navigation }: TabProps<"Search">) {
  const { phones, error, reload } = usePhones();
  const [keyword, setKeyword] = useState("");
  const p = usePalette();
  if (error) return <ErrorBox message={error} onRetry={reload} />;
  if (!phones) return <Loading />;
  const result = phones.filter((x) => x.name.toLowerCase().includes(keyword.trim().toLowerCase()));
  return (
    <View style={{ flex: 1, backgroundColor: p.bg }}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập từ khóa"
        placeholderTextColor={p.muted}
        style={[styles.input, { backgroundColor: p.card, borderColor: p.line, color: p.text }]}
      />
      <PhoneList
        data={result}
        emptyText={`Không có kết quả cho “${keyword}”`}
        onPressItem={(x) => navigation.navigate("ProductDetails", { id: x.id })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: { margin: 16, marginBottom: 0, height: 44, borderWidth: 1, borderRadius: 8, paddingHorizontal: 12 },
});

import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { colors, radius } from "../theme";

interface Props extends TextInputProps {
  label: string;
  error?: string | null; // có lỗi → viền đỏ + dòng báo lỗi NGAY DƯỚI ô nhập
  rightAccessory?: React.ReactNode;
}

export function FormField({ label, error, rightAccessory, style, ...rest }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null, rightAccessory ? { paddingRight: 40 } : null, style]}
          placeholderTextColor={colors.muted}
          autoCapitalize="none"
          {...rest}
        />
        {rightAccessory ? <View style={styles.accessory}>{rightAccessory}</View> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 4 },
  label: { fontWeight: "700", color: colors.text },
  inputContainer: { position: "relative", justifyContent: "center" },
  input: { backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 10, color: colors.text },
  inputError: { borderColor: colors.danger },
  accessory: { position: "absolute", right: 10, top: 0, bottom: 0, justifyContent: "center", alignItems: "center" },
  error: { color: colors.danger, fontSize: 12 },
});

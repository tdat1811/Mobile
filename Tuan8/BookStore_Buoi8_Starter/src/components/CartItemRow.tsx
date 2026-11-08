import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import { colors, formatPrice, radius } from "../theme";

interface Props {
  item: CartItem;
  onChangeQty: (bookId: number, quantity: number) => void;
  onRemove: (bookId: number) => void;
}

export function CartItemRow({ item, onChangeQty, onRemove }: Props) {
  const [qty, setQty] = useState(item.quantity);
  const debouncedQty = useDebounce(qty, 300);

  useEffect(() => {
    if (debouncedQty !== item.quantity) {
      onChangeQty(item.bookId, debouncedQty);
    }
  }, [debouncedQty, item.bookId, item.quantity, onChangeQty]);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const canDec = qty > 1;
  const canInc = qty < item.stock;

  return (
    <View style={styles.row}>
      <View style={[styles.cover, { backgroundColor: item.color }]}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <Text style={styles.stock}>Còn {item.stock} cuốn</Text>
      </View>

      <View style={styles.qtyControls}>
        <Pressable
          disabled={!canDec}
          onPress={() => setQty((q) => Math.max(1, q - 1))}
          style={[styles.btn, !canDec && styles.btnDisabled]}
          hitSlop={6}
        >
          <Text style={[styles.btnText, !canDec && styles.textDisabled]}>−</Text>
        </Pressable>
        <Text style={styles.qty}>{qty}</Text>
        <Pressable
          disabled={!canInc}
          onPress={() => setQty((q) => Math.min(item.stock, q + 1))}
          style={[styles.btn, !canInc && styles.btnDisabled]}
          hitSlop={6}
        >
          <Text style={[styles.btnText, !canInc && styles.textDisabled]}>+</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => onRemove(item.bookId)} hitSlop={8} accessibilityLabel="Xóa khỏi giỏ">
        <Text style={styles.trash}>🗑️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 5,
    gap: 10,
  },
  cover: { width: 54, height: 72, borderRadius: radius.sm, alignItems: "center", justifyContent: "center" },
  emoji: { fontSize: 26 },
  info: { flex: 1, gap: 2 },
  title: { fontWeight: "700", color: colors.text },
  price: { color: colors.indigo, fontWeight: "800" },
  stock: { color: colors.muted, fontSize: 12 },
  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: radius.sm,
    paddingHorizontal: 4,
    paddingVertical: 2,
    gap: 6,
  },
  btn: { width: 26, height: 26, alignItems: "center", justifyContent: "center", borderRadius: 4 },
  btnDisabled: { opacity: 0.3 },
  btnText: { fontSize: 16, fontWeight: "800", color: colors.navy },
  textDisabled: { color: colors.muted },
  qty: { fontWeight: "800", color: colors.navy, fontSize: 14, minWidth: 18, textAlign: "center" },
  trash: { fontSize: 22 },
});

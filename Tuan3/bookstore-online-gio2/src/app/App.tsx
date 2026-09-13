// GIỜ 2 — Kích thước, Wrap và Lưới sản phẩm (Grid)
// Minh hoạ riêng: Bài 1 (Category Chips, flexWrap) + Bài 2 (Book Grid 2 cột).
// Thử thách giờ 2 (2 cột -> 3 cột bằng gap) đã có sẵn trong BookGrid.tsx — đổi
// hằng số USE_GAP_LAYOUT trong file đó để xem biến thể 3 cột.
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BOOKS } from "../../data";
import { BookGrid } from "../components/BookGrid";
import { CategoryChips } from "../components/CategoryChips";

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Danh mục (flexWrap)</Text>
        <CategoryChips />

        <Text style={styles.sectionTitle}>Lưới sách (2 cột)</Text>
        <BookGrid
          books={BOOKS}
          onPressBook={(id) => console.log("Mở sách", id)}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16 },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
});

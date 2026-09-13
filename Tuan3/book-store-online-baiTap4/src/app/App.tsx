import { BookGrid } from "@/components/ui/BookGrid";
import { CategoryChips } from "@/components/ui/CategoryChips";
import { FloatingCartButton } from "@/components/ui/FloatingCartButton";
import { Header } from "@/components/ui/Header";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BOOKS } from "../../data";
export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.screen}>
      <Header></Header>
      <ScrollView style={styles.content}>
        <CategoryChips></CategoryChips>
        <BookGrid
          books={BOOKS}
          onPressBook={() => setCartCount(cartCount + 1)}
        ></BookGrid>
      </ScrollView>
      <FloatingCartButton
        count={cartCount}
        onPress={() => undefined}
      ></FloatingCartButton>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 16, paddingBottom: 100 },
});

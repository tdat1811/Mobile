import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import { SettingsProvider, useSettings } from "./src/context/SettingsContext";
import { AppNavigator } from "./src/navigation/AppNavigator";

function Root() {
  const { dark } = useSettings();
  return (
    <>
      <StatusBar style={dark ? "light" : "dark"} />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SettingsProvider>
          <FavoritesProvider>
            <Root />
          </FavoritesProvider>
        </SettingsProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

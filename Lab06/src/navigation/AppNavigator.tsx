import React from "react";
import { Pressable } from "react-native";
import {
  DarkTheme, DefaultTheme, DrawerActions, NavigationContainer, getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { usePalette, useSettings } from "../context/SettingsContext";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { ChooseColorScreen } from "../screens/ChooseColorScreen";
import type { DrawerParamList, ShopStackParamList, TabParamList } from "./types";

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createNativeStackNavigator<ShopStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

type IconName = keyof typeof Ionicons.glyphMap;

// Bottom Tab (Bài 3 + Favorites của Bài 4): [icon khi chọn, icon khi không chọn]
const TAB_ICONS: Record<keyof TabParamList, [IconName, IconName]> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Favorites: ["heart", "heart-outline"],
  Profile: ["person", "person-outline"],
};
const TAB_TITLES: Record<keyof TabParamList, string> = {
  Home: "Trang chủ", Search: "Tìm kiếm", Favorites: "Yêu thích", Profile: "Cá nhân",
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,                       // tiêu đề do Stack bên ngoài hiển thị
        tabBarActiveTintColor: colors.red,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={TAB_ICONS[route.name][focused ? 0 : 1]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: TAB_TITLES.Home }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: TAB_TITLES.Search }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: TAB_TITLES.Favorites }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: TAB_TITLES.Profile }} />
    </Tab.Navigator>
  );
}

// Stack (Bài 1 + Bài 4): Tabs → ProductDetails → ChooseColor
function ShopStack() {
  const p = usePalette();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={({ route, navigation }) => ({
          title: TAB_TITLES[(getFocusedRouteNameFromRoute(route) as keyof TabParamList | undefined) ?? "Home"],
          headerLeft: () => (
            <Pressable hitSlop={10} style={{ marginRight: 16 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu" size={26} color={p.text} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: "Chi tiết sản phẩm" }} />
      <Stack.Screen name="ChooseColor" component={ChooseColorScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const DRAWER_ICONS: Record<keyof DrawerParamList, IconName> = {
  Shop: "storefront-outline",
  Profile: "person-outline",
  Settings: "settings-outline",
};

// Drawer (Bài 5) bao ngoài toàn bộ app
export function AppNavigator() {
  const { dark } = useSettings();
  const base = dark ? DarkTheme : DefaultTheme;
  const theme = { ...base, colors: { ...base.colors, primary: colors.red } };
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerActiveTintColor: colors.red,
          drawerIcon: ({ color, size }) => <Ionicons name={DRAWER_ICONS[route.name]} size={size} color={color} />,
        })}
      >
        <Drawer.Screen name="Shop" component={ShopStack} options={{ title: "Cửa hàng", headerShown: false }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Hồ sơ" }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Cài đặt" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import type { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ColorKey } from "../types";

export type TabParamList = { Home: undefined; Search: undefined; Favorites: undefined; Profile: undefined };

export type ShopStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  ProductDetails: { id: string; color?: ColorKey };
  ChooseColor: { id: string; color?: ColorKey };
};

export type DrawerParamList = {
  Shop: NavigatorScreenParams<ShopStackParamList>;
  Profile: undefined;
  Settings: undefined;
};

export type ShopProps<T extends keyof ShopStackParamList> = NativeStackScreenProps<ShopStackParamList, T>;
export type TabProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  NativeStackScreenProps<ShopStackParamList>
>;

import React from "react";
import { usePhones } from "../api/usePhones";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { PhoneList } from "../components/PhoneList";
import { useFavorites } from "../context/FavoritesContext";
import type { TabProps } from "../navigation/types";

export function FavoritesScreen({ navigation }: TabProps<"Favorites">) {
  const { ids } = useFavorites();
  const { phones, error, reload } = usePhones();
  if (error) return <ErrorBox message={error} onRetry={reload} />;
  if (!phones) return <Loading />;
  return (
    <PhoneList
      data={phones.filter((p) => ids.includes(p.id))}
      emptyText="Chưa có sản phẩm nào được lưu."
      onPressItem={(p) => navigation.navigate("ProductDetails", { id: p.id })}
    />
  );
}

import React from "react";
import { usePhones } from "../api/usePhones";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { PhoneList } from "../components/PhoneList";
import type { TabProps } from "../navigation/types";

// Tab "Trang chủ": danh sách sản phẩm lấy từ API → bấm để sang ProductDetails
export function HomeScreen({ navigation }: TabProps<"Home">) {
  const { phones, error, reload } = usePhones();
  if (error) return <ErrorBox message={error} onRetry={reload} />;
  if (!phones) return <Loading />;
  return (
    <PhoneList
      data={phones}
      emptyText="Chưa có sản phẩm nào."
      onPressItem={(p) => navigation.navigate("ProductDetails", { id: p.id })}
    />
  );
}

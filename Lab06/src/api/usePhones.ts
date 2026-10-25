import { useCallback, useEffect, useState } from "react";
import { Phone } from "../types";
import { fetchPhone, fetchPhones } from "./phoneApi";

const errorText = (e: unknown) => (e instanceof Error ? e.message : "Không thể kết nối máy chủ");

// Danh sách sản phẩm (Home / Search / Favorites)
export function usePhones() {
  const [phones, setPhones] = useState<Phone[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    setPhones(null);
    try {
      setPhones(await fetchPhones());
    } catch (e) {
      setError(errorText(e));
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return { phones, error, reload: load };
}

// Một sản phẩm theo id (ProductDetails / ChooseColor). Có cache để hai màn dùng chung, không bị nháy loading.
const cache = new Map<string, Phone>();

export function usePhone(id: string) {
  const [phone, setPhone] = useState<Phone | null>(cache.get(id) ?? null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const p = await fetchPhone(id);
      cache.set(id, p);
      setPhone(p);
    } catch (e) {
      setError(errorText(e));
    }
  }, [id]);

  useEffect(() => { load(); }, [load]);

  return { phone, error, reload: load };
}

import { COLOR_ORDER, PHONES } from "../data/phones";
import { ColorKey, Phone } from "../types";

// Mặc định dùng API mockapi.io của bạn (resource "Phone").
// Muốn đổi: EXPO_PUBLIC_API_URL=https://xxxx.mockapi.io  |  đặt rỗng ("") để chạy offline bằng dữ liệu mẫu.
const DEFAULT_API_URL = "https://6adcff94fa5e73d4ab2dd718.mockapi.io";
export const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? DEFAULT_API_URL).replace(/\/$/, "");
export const USING_API = API_URL !== "";
const RESOURCE = "Phone";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// mockapi.io tự sinh dữ liệu giả (rating = 99, colors = [], defaultColor = "defaultColor 1"...)
// nên chuẩn hoá về đúng kiểu Phone để app không bị lỗi khi hiển thị.
function normalize(raw: any): Phone {
  const valid = (c: unknown): c is ColorKey => COLOR_ORDER.includes(c as ColorKey);
  const colorList: ColorKey[] = Array.isArray(raw.colors) ? raw.colors.filter(valid) : [];
  return {
    id: String(raw.id),
    name: String(raw.name ?? ""),
    price: Number(raw.price) || 0,
    oldPrice: Number(raw.oldPrice) || 0,
    rating: Math.max(0, Math.min(5, Math.round(Number(raw.rating) || 0))),
    reviewCount: Number(raw.reviewCount) || 0,
    supplier: String(raw.supplier ?? ""),
    badge: String(raw.badge ?? ""),
    colors: colorList.length > 0 ? colorList : COLOR_ORDER,
    defaultColor: valid(raw.defaultColor) ? raw.defaultColor : "blue",
  };
}

export async function fetchPhone(id: string): Promise<Phone> {
  if (!USING_API) {                         // chế độ offline: giả lập độ trễ để thấy loading
    await sleep(600);
    const p = PHONES.find((x) => x.id === id);
    if (!p) throw new Error(`Không tìm thấy sản phẩm #${id}`);
    return p;
  }
  const res = await fetch(`${API_URL}/${RESOURCE}/${id}`);
  if (res.status === 404) throw new Error(`Không tìm thấy sản phẩm #${id}`);
  if (!res.ok) throw new Error(`Máy chủ trả về lỗi ${res.status}`);
  return normalize(await res.json());
}

// Dùng cho Bài 3, 4: lấy toàn bộ danh sách sản phẩm
export async function fetchPhones(): Promise<Phone[]> {
  if (!USING_API) {
    await sleep(600);
    return PHONES;
  }
  const res = await fetch(`${API_URL}/${RESOURCE}`);
  if (!res.ok) throw new Error(`Máy chủ trả về lỗi ${res.status}`);
  const data = await res.json();
  return (data as any[]).map(normalize);
}

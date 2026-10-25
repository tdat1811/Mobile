import React, { createContext, useContext, useMemo, useState } from "react";
import { colors } from "../theme";

interface Ctx { notify: boolean; setNotify: (v: boolean) => void; dark: boolean; setDark: (v: boolean) => void }
const SettingsContext = createContext<Ctx | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [notify, setNotify] = useState(true);
  const [dark, setDark] = useState(false);
  const value = useMemo(() => ({ notify, setNotify, dark, setDark }), [notify, dark]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings phải nằm trong <SettingsProvider>");
  return ctx;
};

// Bảng màu theo chế độ sáng / tối (Settings → "Chế độ tối" đổi toàn bộ app)
export function usePalette() {
  const { dark } = useSettings();
  return dark
    ? { bg: "#111827", card: "#1F2937", text: "#F9FAFB", muted: "#9CA3AF", line: "#374151" }
    : { bg: colors.bg, card: "#FFFFFF", text: colors.text, muted: colors.muted, line: colors.line };
}

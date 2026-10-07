import type { Metadata } from "next";
import "./globals.css";

// This metadata establishes the new Ungyeol brand identity.
export const metadata: Metadata = {
  title: "운결 | 나를 비추는 운명의 빛",
  description: "오늘의 운세부터 타로, 사주, 궁합까지."
};

// This root layout applies the global page shell.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
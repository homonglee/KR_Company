import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "KR컴퍼니 | 나광열 — 사람의 이야기를 콘텐츠로", description: "사진과 미디어를 기반으로 브랜드·지역·사람의 이야기를 연결하는 KR컴퍼니입니다.", keywords: ["KR컴퍼니", "나광열", "수원 콘텐츠 제작", "콘텐츠 크리에이터", "라이브커머스", "지역문화 콘텐츠"], icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }

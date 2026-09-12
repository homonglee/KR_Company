import type { Metadata } from "next";
import "./globals.css";

const title = "KR컴퍼니 | 나광열 — 사람의 이야기를 콘텐츠로";
const description =
  "사진과 미디어를 기반으로 브랜드·지역·사람의 이야기를 연결하는 KR컴퍼니입니다.";
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "kr-company.vercel.app";
const siteUrl = vercelHost.startsWith("http")
  ? vercelHost
  : `https://${vercelHost}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "KR컴퍼니",
    "나광열",
    "수원 콘텐츠 제작",
    "콘텐츠 크리에이터",
    "라이브커머스",
    "지역문화 콘텐츠",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "KR컴퍼니",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "KR컴퍼니 나광열 대표와 Story Creative Studio 브랜드 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

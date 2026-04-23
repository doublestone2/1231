import "./globals.css";

export const metadata = {
  title: "로가드 | 불법사채 · 불법추심 대응",
  description: "매일법률사무소 로가드 상담 랜딩페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
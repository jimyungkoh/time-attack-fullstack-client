import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DefaultLayout from "./_common/DefaultLayout";
import Providers from "./_providers/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "중고마켓",
  description: "직거래부터 택배거래까지 쉽고 안전하게, 취향 기반 중고거래 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryWrapper from "@/components/reactQueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nubi Academy",
  description: "IQBAL GANTENG WKWK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryWrapper>
          <div>{children}</div>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}

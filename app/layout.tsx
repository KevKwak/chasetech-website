import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HK ChaseTech Power Trading Limited",
  description: "International trade, import/export of electronic products, EMS manufacturing, brand agency and technical consulting services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

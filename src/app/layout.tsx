import LayoutWrapper from "@/_components/layout/LayoutWrapper";
import { MainLayoutGrid } from "@/_components/layout/MainLayoutGrid";
import { MobileAside } from "@/_components/navigation/MobileAside";
import { MobileNav } from "@/_components/navigation/MobileNav";
import { AsideV2 } from "@/_components/navigation/AsideV2";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});

export const metadata: Metadata = {
  title: "FinFlow",
  authors: [{ name: "Brandon Bradley" }],
  description: "Cash flow projection tool",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <LayoutWrapper>
          <MainLayoutGrid
            disableGutters
            maxWidth={false}
            sx={{
              gridTemplateRows: {
                xs: "max-content",
                md: "unset",
              },
              overflow: "hidden",
              width: "100vw",
              height: "100vh",
            }}
          >
            <MobileNav />

            <MobileAside />

            <AsideV2 />
            {children}
          </MainLayoutGrid>
        </LayoutWrapper>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/_shared/presentational/components/navigation/MobileNav";
import { MobileAside } from "@/_shared/presentational/components/navigation/MobileAside";
import { AsideV2 } from "@/_shared/presentational/components/navigation/AsideV2";
import LayoutWrapper from "@/_shared/presentational/components/layout/LayoutWrapper";
import { MainLayoutGrid } from "@/_shared/presentational/components/layout/MainLayoutGrid";

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

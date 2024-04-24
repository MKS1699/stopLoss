import type { Metadata } from "next";
import "./globals.css";
import { barlow } from "@/app/utils/fonts";
import Script from "next/script";
import StoreProvider from "./redux/store/StoreProvider";
import HotToast from "./components/HotToast";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "Stoploss.live : %s",
    default: "Stoploss.live",
  },
  description: "One stop solution for your losses.",
  icons: {
    icon: "/logo.png",
  },
  // metadataBase: new URL("https://www.stoploss.live"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-none">
      <head>
        {/* Google Adsencse account linking */}
        {/* <meta name="google-adsense-account" content="ca-pub-9077808244197912" /> */}
      </head>
      <body className={`${barlow.className}`}>
        <StoreProvider>
          <HotToast />
          {children}
        </StoreProvider>
        {/* Google Ads Script */}
        {/* <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9077808244197912"
        /> */}
        <Analytics />
      </body>
    </html>
  );
}

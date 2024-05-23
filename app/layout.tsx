import type { Metadata } from "next";
import "./globals.css";
import { barlow } from "@/app/utils/fonts";
import Script from "next/script";
import StoreProvider from "./redux/store/StoreProvider";
import HotToast from "./components/HotToast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: "Stoploss.live : %s",
    default: "Stoploss.live",
  },
  description: "One stop solution for your losses.",
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://www.stoploss.live"),
  creator: "Mehul Kumar (CoderMehul)",
  publisher: "Mehul Kumar",
  keywords: [
    "Stock Market News",
    "Market Analysis",
    "Stock Trading Tips",
    "Investment Strategies",
    "Financial News",
    "Market Trends",
    "IPO Updates",
    "Investment Advice",
    "Stock Predictions",
    "Financial Analysis",
    "Market Insights",
    "Trading Strategies",
    "Stock Market Tips",
    "Stock Market Updates",
    "Stock Market Trends",
    "Market Forecasts",
    "Stock Analysis",
    "Stock Tips",
    "Investment Tips",
    "Trading Tips",
    "Stock Market Insights",
    "Financial Tips",
    "Market News",
    "Stock Market Reports",
    "Financial Market Analysis",
    "Investment News",
    "Market Research",
    "Stock Market Strategies",
    "Financial Planning",
    "Market Predictions",
    "Stock News",
    "Financial Insights",
    "Investment Trends",
    "Market Analysis Tools",
    "Trading News",
    "Financial Strategies",
    "Stock Market Data",
    "Financial Market News",
    "Stock Market Research",
    "Investment Research",
    "Stock Recommendations",
    "Financial Market Updates",
    "Market Data",
    "Stock Market Forecasts",
    "Stock Market Advice",
    "Investment Forecasts",
    "Market Commentary",
    "Stock Market Analysis Tools",
    "Financial Market Insights",
    "Stock Market Blogs",
    "Trading Forecasts",
    "Market Review",
    "Stock Market News Today",
    "Financial Market Tips",
    "Investment Guides",
    "Stock Market Insights 2024",
    "Financial Market Strategies",
    "Stock Market Charts",
    "Trading Analysis",
    "Financial News Today",
    "Market Analysis 2024",
    "Stock Market Reports 2024",
    "Investment Strategies 2024",
    "Market Trends 2024",
    "Stock Trading Analysis",
    "Financial Market Analysis 2024",
    "Investment Analysis",
    "Market Updates 2024",
    "Stock Market Projections",
    "Financial Market Research",
    "Trading Strategies 2024",
    "Stock Market Today",
    "Market Insights 2024",
    "Financial Planning 2024",
    "Stock Market Tools",
    "Financial Reports",
    "Market Strategies",
    "Stock Market Information",
    "Trading Tools",
    "Financial Market Forecasts",
    "Stock Market Outlook",
    "Market Analysis Reports",
    "Trading Reports",
    "Financial Market Review",
    "Stock Market Advice 2024",
    "Investment Planning",
    "Market Strategies 2024",
    "Stock Market News Updates",
    "Financial Market Predictions",
    "Trading Insights",
    "Market Projections",
    "Stock Market Predictions 2024",
    "Financial Market Trends",
    "Investment News 2024",
    "Market Research Reports",
    "Stock Market Forecasts 2024",
    "Financial Market Analysis Tools",
    "Trading News 2024",
    "Market Data 2024",
    "Stock Market Trends 2024",
  ],
  openGraph: {
    title: "Stoploss.live",
    type: "website",
    url: "https://www.stoploss.live",
    // images : '/logo.png',
    description: "One stop solution for your losses.",
    siteName: "Stoploss.live",
    images: {
      alt: "SL",
      url: "/logo.png",
      type: "image/jpeg/png",
    },
  },
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
        <meta name="google-adsense-account" content="ca-pub-9077808244197912" />
      </head>
      <body className={`${barlow.className} bg-light dark:bg-bodyDark`}>
        <StoreProvider>
          <HotToast />
          {children}
        </StoreProvider>
        {/* Google Ads Script */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9077808244197912"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

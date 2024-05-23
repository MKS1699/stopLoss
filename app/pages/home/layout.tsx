import { Footer, TitleBar } from "@/app/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleBar />
      {children}
      <Footer />
    </>
  );
}

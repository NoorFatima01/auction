import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import { Providers } from "@/providers/tan-stack-query";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <Providers>{children}</Providers> <Footer />
    </>
  );
}

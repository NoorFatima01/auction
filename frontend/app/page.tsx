import Categories from "@/sections/categories";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import NavBar from "@/components/navbar";
import PlaceBid from "@/sections/place-bid";
import Recommended from "@/sections/recommended";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="">
        <Hero />
        <Categories />
        <PlaceBid />
      </div>
      <Recommended />
      <Footer />
    </div>
  );
}

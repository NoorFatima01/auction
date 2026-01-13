import Categories from "@/sections/categories";
import Hero from "@/sections/hero";
import PlaceBid from "@/sections/place-bid";
import Recommended from "@/sections/recommended";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <PlaceBid />
      <Recommended />
    </div>
  );
}

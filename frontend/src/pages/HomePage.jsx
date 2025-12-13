import Hero from "../components/hero/Hero";
import Shop from "../components/shop/Shop";
import { useProduct } from "../hooks/useProduct";
export default function HomePage() {
  useProduct();
  return (
    <>
      <Hero />
      <Shop />
    </>
  );
}

import Banner from "./Banner";
import Trending from "./Trending";

export default function Hero() {
  return (
    <section className="soft-card px-6 sm:px-8 py-10 flex flex-col lg:flex-row gap-8">
      <Banner />
      <Trending />
    </section>
  );
}

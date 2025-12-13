import Filter from "./Filter";
import ProductItem from "./ProductItem";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import Sort from "./Sort";

export default function Shop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
      <Filter />
      <div className="md:col-span-3">
        <Sort />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductItem />
          <ProductLoadingSkeleton />
        </div>
      </div>
    </div>
  );
}

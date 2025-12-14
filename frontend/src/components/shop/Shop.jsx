import { useContext } from "react";
import { ProductContext } from "../../contexts";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import Sort from "./Sort";
export default function Shop() {
  const { products, loading } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
      <Filter />
      <div className="md:col-span-3">
        <Sort />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading.state ? (
            <>
              <ProductLoadingSkeleton />
              <ProductLoadingSkeleton />
              <ProductLoadingSkeleton />
              <ProductLoadingSkeleton />
              <ProductLoadingSkeleton />
              <ProductLoadingSkeleton />
            </>
          ) : products.length > 0 ? (
            products.map((item) => <ProductItem key={item.id} product={item} />)
          ) : (
            <p>No product found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { ProductContext } from "../../contexts";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import ProductsStatusText from "./ProductsStatusText";
import Sort from "./Sort";
export default function Shop() {
  const { products, loading, isAvailableProducts } = useContext(ProductContext);
  console.log(isAvailableProducts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
      <Filter />
      <div className="md:col-span-3">
        <Sort />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading.state && (
            <ProductLoadingSkeleton count={6} loading={loading} />
          )}
          {isAvailableProducts ? (
            products.map((item) => <ProductItem key={item.id} product={item} />)
          ) : (
            <ProductsStatusText loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
}

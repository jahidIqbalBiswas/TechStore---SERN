import { useState } from "react";
import { ProductContext } from "../contexts";
import { useProduct } from "../hooks";
export default function ProductProvider({ children }) {
  const [filterParameter, setFilterQuery] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
  });
  const { category, minPrice, maxPrice, minRating } = filterParameter;
  const { products, loading, error } = useProduct(
    category,
    minPrice,
    maxPrice,
    minRating
  );
  const filterProducts = (category, minPrice, maxPrice, minRating) => {
    setFilterQuery({
      ...filterParameter,
      category,
      minPrice,
      maxPrice,
      minRating,
    });
  };
  return (
    <ProductContext.Provider
      value={{ products, loading, error, filterProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

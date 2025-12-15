import { useEffect, useState } from "react";
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
  const { allProducts, loading, error } = useProduct(
    category,
    minPrice,
    maxPrice,
    minRating
  );
  const [products, setProducts] = useState([]);
  const isAvailableProducts = allProducts;
  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);
  const sortProducts = (sortingValue) => {
    const sorted = [...allProducts];

    switch (sortingValue) {
      case "newest": {
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      }
      case "oldest": {
        sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      }
      case "lowToHigh": {
        sorted.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      }
      case "highToLow": {
        sorted.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      }
      default:
        setProducts(allProducts);
    }
    setProducts(sorted);
  };

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
      value={{
        products,
        isAvailableProducts,
        loading,
        sortProducts,
        filterProducts,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

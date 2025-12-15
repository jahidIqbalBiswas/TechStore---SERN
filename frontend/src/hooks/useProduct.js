import { useEffect, useState } from "react";
const useProduct = (category, minPrice, maxPrice, minRating) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState("");
  console.log(category, minPrice, maxPrice, minRating);

  const fetchProducts = async (category, minPrice, maxPrice, minRating) => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching product(s)...",
      }));
      const baseURL = import.meta.env.VITE_BASE_URL;
      const API = `${baseURL}/products/filter?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}`;
      console.log(API);
      const response = await fetch(API);
      if (response.ok) {
        const data = await response.json();
        if (data.count > 0) setAllProducts(data.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading((prev) => ({ ...prev, state: false, message: "" }));
    }
  };
  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      state: true,
      message: "Fetching product(s)...",
    }));
    fetchProducts(category, minPrice, maxPrice, minRating);
    return () => {};
  }, [category, minPrice, maxPrice, minRating]);
  return { allProducts, loading, error };
};
export default useProduct;

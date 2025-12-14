import { useEffect, useState } from "react";
const useProduct = (category, minPrice, maxPrice, minRating) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState("");
  const fetchProducts = async (
    category = "",
    minPrice = "",
    maxPrice = "",
    minRating = ""
  ) => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching product(s)...",
      }));
      const baseURL = import.meta.env.VITE_BASE_URL;
      console.log(baseURL);
      const API = `${baseURL}/products/?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}`;
      const response = await fetch(API);
      if (response.ok) {
        const data = await response.json();
        if (data.count > 0) setProducts(data.data);
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
  return { products, loading, error };
};
export default useProduct;

import { useEffect, useState } from "react";
const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const fetchCategories = async () => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching categories...",
      }));
      const API = `${import.meta.env.VITE_BASE_URL}/categories`;
      const response = await fetch(API);
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        state: false,
        message: "Fetching categories...",
      }));
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return { categories, loading, error };
};
export default useCategory;

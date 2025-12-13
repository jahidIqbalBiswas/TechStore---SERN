import { useState } from "react";
export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState("");
  const fetchProduct = async (
    category = null,
    minPrice = null,
    maxPrice = null,
    minRating = null
  ) => {
    const API = `${import.meta.}/products/?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&minRating=${minRating}`;
    const response = await fetch(API);
    console.log(await response.json());
  };
  fetchProduct("", "", "", "");
};

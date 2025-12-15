const parsePriceRange = (str) => {
  if (str.includes("+")) {
    return {
      minPrice: Number(str.replace(/\D/g, "")),
      maxPrice: "",
    };
  }

  const [minPrice, maxPrice] = str
    .replace(/\$/g, "")
    .split("-")
    .map((v) => Number(v.trim()));
  if (!maxPrice) return { minPrice };
  return { minPrice, maxPrice };
};
export default parsePriceRange;

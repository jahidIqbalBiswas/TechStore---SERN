import { useContext } from "react";
import { ProductContext } from "../../contexts";
export default function Sort() {
  const { products, loading, sortProducts } = useContext(ProductContext);
  function handleChange(e) {
    const value = e.target.value;
    sortProducts(value);
  }
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-slate-600"> Showing {products.length} products</p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-700">
          Sort by:
        </label>
        <select
          onChange={handleChange}
          id="sort"
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option value="default">Default</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

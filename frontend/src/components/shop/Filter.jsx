import { useContext, useEffect, useEffectEvent, useState } from "react";
import { CategoryContext, ProductContext } from "../../contexts";
import { parsePriceRange } from "../../utils/";
export default function Filter() {
  const { categories } = useContext(CategoryContext);
  const { filterProducts } = useContext(ProductContext);
  const initialFilterState = {
    category: "",
    priceRange: "",
    starRating: "",
  };
  const [filter, setFilter] = useState(initialFilterState);
  const priceRanges = ["$0 - $2000", "$2000 - $5000", "$5000+"];
  const ratingRanges = ["4.5", "4.0", "3.5"];
  const handleCategoryFilter = (e) => {
    setFilter((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };
  const handlePriceRangeFilter = (e) => {
    setFilter((prev) => ({
      ...prev,
      priceRange: e.target.value,
    }));
  };
  const handleRatingFilter = (e) => {
    setFilter((prev) => ({
      ...prev,
      starRating: e.target.value,
    }));
  };
  const filterProductEvent = useEffectEvent(() => {
    let { minPrice, maxPrice } = parsePriceRange(filter.priceRange);
    if (!maxPrice) maxPrice = "";
    console.log(minPrice, maxPrice);

    filterProducts(filter.category, minPrice, maxPrice, filter.starRating);
  });
  useEffect(() => {
    filterProductEvent();
  }, [filter]);
  return (
    //filter
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            className="text-xs text-rose-500 font-semibold cursor-pointer"
            onClick={() => setFilter(initialFilterState)}
          >
            Clear
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {categories.length > 0 &&
              categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    onChange={handleCategoryFilter}
                    checked={filter.category == cat.name}
                    value={cat.name}
                    type="checkbox"
                    className="w-4 h-4 text-rose-500 rounded border-slate-300"
                  />
                  <span className="ml-3 text-sm text-slate-700">
                    {cat.name}
                  </span>
                </label>
              ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">
            Price Range
          </h4>
          <div className="space-y-2">
            {priceRanges.map((item) => (
              <label key={item} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="price"
                  className="w-4 h-4 text-rose-500"
                  value={item}
                  checked={filter.priceRange == item}
                  onChange={handlePriceRangeFilter}
                />
                <span className="ml-3 text-sm text-slate-700">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {ratingRanges.map((item) => (
              <label key={item} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filter.starRating == item}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300"
                  value={item}
                  onChange={handleRatingFilter}
                />
                <span className="ml-3 text-sm text-slate-700">
                  {item} ⭐ & up
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

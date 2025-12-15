import { CategoryContext } from "../contexts";
import { useCategory } from "../hooks";
const CategoryProvider = ({ children }) => {
  const { categories, loading, error } = useCategory();
  return (
    <CategoryContext.Provider value={{ categories, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;

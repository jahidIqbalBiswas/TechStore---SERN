import Page from "./Page";
import CategoryProvider from "./providers/CategoryProvider";
import ProductProvider from "./providers/ProductProvider";

export default function App() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <Page />
      </ProductProvider>
    </CategoryProvider>
  );
}

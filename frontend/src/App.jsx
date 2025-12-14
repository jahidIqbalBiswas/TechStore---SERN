import Page from "./Page";
import ProductProvider from "./providers/ProductProvider";
export default function App() {
  return (
    <ProductProvider>
      <Page />
    </ProductProvider>
  );
}

import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import ShopPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

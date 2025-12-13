import BottomFooter from "./BottomFooter";
import About from "./widgets/About";
import CustomerService from "./widgets/CustomerService";
import QuickLinks from "./widgets/QuickLinks";
import SocialLinks from "./widgets/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <About />
          <QuickLinks />
          <CustomerService />
          <SocialLinks />
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
}

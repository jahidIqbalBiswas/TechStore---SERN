import CartButton from "./CartButton";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Menu />
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Search />
          </div>
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

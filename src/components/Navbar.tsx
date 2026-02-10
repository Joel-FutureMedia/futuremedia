import { Home, ShoppingCart, Image, Users, Heart, Tag, BookOpen, Briefcase, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", color: "#313d49", icon: Home },
  { label: "Shop", color: "#e30a7f", icon: ShoppingCart },
  { label: "Gallery", color: "#ee3030", icon: Image },
  { label: "Meet the Team", color: "#0d9a4b", icon: Users },
  { label: "Hit4Hope", color: "#1e8dc5", icon: Heart },
  { label: "Brands", color: "#1a6232", icon: Tag },
  { label: "Blog", color: "#f15024", icon: BookOpen },
  { label: "Vacancies", color: "#143443", icon: Briefcase },
  { label: "Reach out to us", color: "#313d49", icon: Mail },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <a href="/" className="shrink-0">
          <img src={logo} alt="FutureMedia" className="h-10" />
        </a>
        <div className="flex-1 flex items-center justify-end gap-2 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-btn"
              style={{ backgroundColor: item.color }}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

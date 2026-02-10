import { useState } from "react";
import { Home, ShoppingCart, Image, Users, Heart, Tag, BookOpen, Briefcase, Mail, Search, UserCircle, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-card shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 py-3 flex items-center gap-3">
        <a href="/" className="shrink-0">
          <img src={logo} alt="FutureMedia" className="h-8 sm:h-10" />
        </a>
        <button className="p-2 rounded-full hover:bg-muted transition-colors shrink-0" aria-label="Search">
          <Search size={20} className="text-foreground" />
        </button>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1.5 flex-nowrap ml-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-btn"
              style={{ backgroundColor: item.color }}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="xl:hidden ml-auto">
          <button
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        <button className="p-2 rounded-full hover:bg-muted transition-colors shrink-0" aria-label="Account">
          <UserCircle size={22} className="text-foreground" />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="xl:hidden px-4 pb-4 flex flex-wrap gap-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-btn"
              style={{ backgroundColor: item.color }}
              onClick={() => setMenuOpen(false)}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

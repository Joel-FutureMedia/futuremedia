import { useState } from "react";
import { Home, ShoppingCart, Image, Users, Heart, Tag, BookOpen, Briefcase, Mail, Search, UserCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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

const brandOptions = [
  "Radio Wave",
  "Nova",
  "Fresh FM",
  "92 FM",
  "One FM",
  "LearnOnOne",
  "Adbot",
  "Radio Omulunga",
  "ShopBeat",
  "Promo Basket",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !brand) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll be in touch soon.");
    setName("");
    setEmail("");
    setPhone("");
    setBrand("");
    setMessage("");
    setContactOpen(false);
  };

  return (
    <nav className="w-full bg-card shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Left spacer for mobile - keeps account button on right */}
        <div className="xl:hidden"></div>

        {/* Centered logo, search, and nav menus */}
        <div className="flex items-center gap-2 justify-center flex-1">
          <a href="/" className="shrink-0">
            <img src={logo} alt="FutureMedia" className="h-8 sm:h-10" />
          </a>
          <button className="p-2 rounded-full hover:bg-muted transition-colors shrink-0" aria-label="Search">
            <Search size={20} className="text-foreground" />
          </button>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1.5 flex-nowrap">
            {navItems.map((item) => {
              if (item.label === "Reach out to us") {
                return (
                  <Dialog key={item.label} open={contactOpen} onOpenChange={setContactOpen}>
                    <DialogTrigger asChild>
                      <button
                        className="nav-btn"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon size={14} />
                        {item.label}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md max-w-[95vw] bg-card z-50 max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-foreground">Contact Us</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-name">Full Name *</Label>
                          <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required maxLength={100} />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-email">Email *</Label>
                          <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required maxLength={255} />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-phone">Phone</Label>
                          <Input id="contact-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+264 ..." maxLength={20} />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-brand">Which brand do you want to contact? *</Label>
                          <Select value={brand} onValueChange={setBrand} required>
                            <SelectTrigger className="bg-card">
                              <SelectValue placeholder="Select a brand" />
                            </SelectTrigger>
                            <SelectContent className="bg-card z-[100]">
                              {brandOptions.map((b) => (
                                <SelectItem key={b} value={b}>{b}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="contact-message">Message</Label>
                          <Textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" maxLength={1000} rows={3} />
                        </div>
                        <Button type="submit" className="w-full bg-[#0d9a4b] hover:bg-[#0b7f3e] text-white">
                          Send
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                );
              }
              return (
                <button
                  key={item.label}
                  className="nav-btn"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side - Mobile hamburger and Account button */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <div className="xl:hidden">
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
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="xl:hidden px-4 pb-4 flex flex-wrap gap-2 animate-fade-in">
          {navItems.map((item) => {
            if (item.label === "Reach out to us") {
              return (
                <Dialog key={item.label} open={contactOpen} onOpenChange={setContactOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="nav-btn"
                      style={{ backgroundColor: item.color }}
                      onClick={() => setMenuOpen(false)}
                    >
                      <item.icon size={14} />
                      {item.label}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md max-w-[95vw] bg-card z-50 max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Contact Us</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="mobile-contact-name">Full Name *</Label>
                        <Input id="mobile-contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required maxLength={100} />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="mobile-contact-email">Email *</Label>
                        <Input id="mobile-contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required maxLength={255} />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="mobile-contact-phone">Phone</Label>
                        <Input id="mobile-contact-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+264 ..." maxLength={20} />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="mobile-contact-brand">Which brand do you want to contact? *</Label>
                        <Select value={brand} onValueChange={setBrand} required>
                          <SelectTrigger className="bg-card">
                            <SelectValue placeholder="Select a brand" />
                          </SelectTrigger>
                          <SelectContent className="bg-card z-[100]">
                            {brandOptions.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="mobile-contact-message">Message</Label>
                        <Textarea id="mobile-contact-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" maxLength={1000} rows={3} />
                      </div>
                      <Button type="submit" className="w-full bg-[#0d9a4b] hover:bg-[#0b7f3e] text-white">
                        Send
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              );
            }
            return (
              <button
                key={item.label}
                className="nav-btn"
                style={{ backgroundColor: item.color }}
                onClick={() => setMenuOpen(false)}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

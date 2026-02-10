import { useState } from "react";
import logo99fm from "@/assets/logo-99fm.jpg";
import logoFresh from "@/assets/logo-freshfm.jpg";
import logoLearnon from "@/assets/logo-learnon.jpg";
import logoNova from "@/assets/logo-nova.jpg";
import logoOmulunga from "@/assets/logo-omulunga.jpg";
import logoOne from "@/assets/logo-one.jpg";
import logoWave from "@/assets/logo-wave.jpg";
import logoFmNews from "@/assets/logo-fmnews.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const logos = [
  { src: logoWave, alt: "Radio Wave 96.7" },
  { src: logo99fm, alt: "99 FM" },
  { src: logoFresh, alt: "Fresh FM" },
  { src: logoNova, alt: "Nova 103.5 FM" },
  { src: logoOne, alt: "One FM" },
  { src: logoLearnon, alt: "LearnOnOne" },
  { src: logoOmulunga, alt: "Radio Omulunga" },
  { src: logoFmNews, alt: "FutureMedia News" },
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

const LogoCarousel = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");

  const items = [...logos, ...logos, ...logos, ...logos];

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
    setOpen(false);
  };

  return (
    <section className="w-full bg-card py-6 sm:py-10 overflow-hidden">
      <h2 className="text-center font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 px-4">
        Our Brands, Work with us now
      </h2>
      <div className="flex justify-center mb-6 sm:mb-8 mt-3 sm:mt-4 px-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#0d9a4b] hover:bg-[#0b7f3e] text-white px-6 py-2 text-base font-semibold">
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md max-w-[95vw] bg-card z-50 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-foreground">Contact Us</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required maxLength={100} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" required maxLength={255} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+264 ..." maxLength={20} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="brand">Which brand do you want to contact? *</Label>
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
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" maxLength={1000} rows={3} />
              </div>
              <Button type="submit" className="w-full bg-[#0d9a4b] hover:bg-[#0b7f3e] text-white">
                Send
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-carousel flex items-center gap-6 sm:gap-10 w-max">
          {items.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-md hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

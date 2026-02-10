import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const brands = [
    "OneAfrica",
    "LearnOnOne",
    "Radiowave",
    "Omulunga Radio",
    "99FM",
    "Fresh FM",
    "Nova 103.5FM",
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="font-heading text-lg font-bold mb-3">Contact Us</h3>
          <div className="flex items-start gap-2 text-sm opacity-90">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>Unit 42 & 44, Hyper Motor City, Maxwell Street, Windhoek, Namibia</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <Phone size={16} className="shrink-0" />
            <span>+264 83 000 1000</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <Mail size={16} className="shrink-0" />
            <a href="mailto:sales@futuremedia.com.na" className="hover:underline">
              sales@futuremedia.com.na
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold mb-3">Our Brands</h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-sm bg-primary-foreground/10 rounded-full px-3 py-1"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs opacity-60 mt-8">
        © {new Date().getFullYear()} FutureMedia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

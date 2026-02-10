import logo99fm from "@/assets/logo-99fm.jpg";
import logoFresh from "@/assets/logo-freshfm.jpg";
import logoLearnon from "@/assets/logo-learnon.jpg";
import logoNova from "@/assets/logo-nova.jpg";
import logoOmulunga from "@/assets/logo-omulunga.jpg";
import logoOne from "@/assets/logo-one.jpg";
import logoWave from "@/assets/logo-wave.jpg";
import logoFmNews from "@/assets/logo-fmnews.jpg";

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

const LogoCarousel = () => {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];

  return (
    <section className="w-full bg-card py-10 overflow-hidden">
      <h2 className="text-center font-heading text-2xl font-bold text-foreground mb-8">
        Our Brands
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="animate-carousel flex items-center gap-10 w-max">
          {items.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden shadow-md hover:scale-110 transition-transform duration-300"
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

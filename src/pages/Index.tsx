import Navbar from "@/components/Navbar";
import HeroNetwork from "@/components/HeroNetwork";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroNetwork />
        <LogoCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

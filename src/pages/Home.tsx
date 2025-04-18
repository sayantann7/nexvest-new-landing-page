import Navbar from "../components/Navbar";
import StockTicker from "../components/Ticker";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
import WelcomeAnimation from "../components/WelcomeAnimation";
import Stats from "../components/Stats";

function Home() {

  return (
    <div className="min-h-screen bg-[#0D0C34] text-white">

      {/* Welcome Animation */}
      <WelcomeAnimation />

      {/* Navbar */}
      <Navbar />

      {/* Stock Ticker Animation */}
      <StockTicker />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <Features />

      {/* Build Something Great Section */}
      <InfoSection />

      {/* Global Stats Section */}
      <Stats />

    </div>
  );
}

export default Home;
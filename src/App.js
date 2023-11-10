import HeaderSection from "./components/headerSection/HeaderSection";
import "./App.css";
import { useSelector } from "react-redux";
import HeroSection from "./components/heroSection/HeroSection";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import PricingSection from "./components/pricingSection/PricingSection";
import FooterSection from "./components/footerSection/FooterSection";
import TryNowSection from "./components/tryNowSection/TryNowSection";
import UsefulSection from "./components/usefulSection/UsefulSection";

function App() {
  const { lan } = useSelector((state) => state.language);
  return (
    <div className="main" style={{ direction: lan === "er" ? "rtl" : "ltr" }}>
      <HeaderSection />
      <HeroSection />
      <UsefulSection/>
      <FeaturesSection/>
      <PricingSection />
      <TryNowSection/>
      <FooterSection/>
    </div>
  );
}

export default App;

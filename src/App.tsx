import { useState } from "react";
import "./App.css";
import { mainStyle } from "./components/mainComponents/mainStyles";
import Navigation from "./components/navComponents/nav";
import HeroSection from "./components/mainComponents/heroSection";
import PriceSection from "./components/mainComponents/priceCardsSection";
import Footer from "./components/footerComponents/footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Navigation
        isMenuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />
      <main className={mainStyle.main}>
        <HeroSection />
        <PriceSection /> 
      </main>
      <Footer /> 
      {menuOpen && (
        <div
          className={mainStyle.overLay}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import Navigation from "../components/navComponents/nav";
import { mainStyle } from "../components/mainComponents/mainStyles";
import {Outlet} from "react-router-dom"
import Footer from "../components/footerComponents/footer";


function MainLayOut(){
  const [menuOpen, setMenuOpen] = useState(false);
   const closeMenu = () => setMenuOpen(false);
   
    return(
        <>
         <Navigation isMenuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />
      <main className={mainStyle.main}>
        < Outlet />
      </main>
       <Footer /> 
      {menuOpen && (
        <div className={mainStyle.overLay} onClick={closeMenu} aria-hidden="true" ></div>
      )}
        </>
    )
}
export default MainLayOut
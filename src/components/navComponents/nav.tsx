import { navMenuStyles, navStyles } from "./navStyles";
import { TbCameraHeart } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import NavigationLinks from "./navigationLinks";
import AuthButtons from "./authBottuns";

interface Prop{
    isMenuOpen : boolean,
    onMenuToggle: () => void,
    onNavigate: () => void
}
function Navigation({onMenuToggle, isMenuOpen, onNavigate}: Prop){

    return(
        <header className={navStyles.nav}>
            <div className={navStyles.logoContainer}>
               <TbCameraHeart size={35} color="#C9D0DC"/>
               <p className={navStyles.logoText}>SNOMIA</p>
            </div>

            <nav className={navStyles.navSub} aria-label="main">
                <NavigationLinks listClass={navStyles.navList}/>
            </nav>

            <AuthButtons containerClass={navStyles.navButtonContainer}
             loginClass={navStyles.logInBtn} signUpClass={navStyles.signUpBtn} />

            <button type="button" className={navStyles.navMenuIconContainer}
             aria-label="toggle menu" aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={onMenuToggle}>
                <CiMenuBurger size={35} />
            </button>

             <div id="mobile-menu" className={isMenuOpen ? navMenuStyles.navMenuContainer : navMenuStyles.hideMenu}>
                 <NavigationLinks listClass={navMenuStyles.navList}  onNavigate={onNavigate}/>
                 <AuthButtons containerClass={navMenuStyles.navButtonContainer} onAction={onNavigate} 
                  loginClass={navMenuStyles.logInBtn} signUpClass={navMenuStyles.signUpBtn}/> 
             </div>
        </header>
    )
}
export default Navigation
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { footerStyle } from "./footerStyles";
import FooterLinks from "./footerLinks";
import PartnersLogo from "./partnersLogo";

const quickLinks = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Blog", href: "#blog"},
    {label: "Profile", href: "#profile"}
]
const contactLinks = [
    {label: "Email", href: "#mail"},
    {label: "Support", href: "#Support"},
    {label: "Location", href: "#location"},
    {label: "Call", href: "#call"}
]
function Footer(){
   const year = new Date().getFullYear()
    return(
        <footer className={footerStyle.section}>
            <div className={footerStyle.container}>
               <FooterLinks headingClass={footerStyle.headings} 
               listClass={footerStyle.footerList} title="Quick Links"  links={quickLinks}/>

               <FooterLinks headingClass={footerStyle.headings} 
               listClass={footerStyle.footerList} title="Contact Us"  links={contactLinks}/>
               
                <nav aria-label="Social media">
                    <h2 className={footerStyle.headings}>Social Media</h2>
                    <ul className={footerStyle.footerList}>
                   <li> <a href="#"> <FaFacebook color="blue" size="30px" aria-label="Facebook"/></a> </li>
                   <li> <a href="#"> <FaYoutube color="red" size="30px" aria-label="Youtube"/></a> </li>
                   <li> <a href="#"> <FaInstagram color="brown" size="30px" aria-label="Instagram"/></a> </li>
                    </ul>
                </nav>
            </div>
            <div className={footerStyle.bottomBar}>
                <PartnersLogo />
                <p className={footerStyle.footerParagraph}>&copy; {year} SNOMIA. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer
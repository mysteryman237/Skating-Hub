import { Link } from "react-router-dom"

interface LinksShape{
    label: string,
    to: string
}
interface LinksProp{
    links: LinksShape[],
    title: string,
    listClass: string,
    headingClass: string
}

 function FooterLinks({links, title, listClass, headingClass}:LinksProp){

    return(
        <nav aria-label="Quick link">
          <h2 className={headingClass}>{title}</h2>
          <ul className={listClass}>
            {links.map(link => <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
            </li>)}
            </ul>
        </nav>
    )
 }
 export default FooterLinks
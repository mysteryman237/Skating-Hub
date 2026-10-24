
interface LinksShape{
    label: string,
    href: string
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
            {links.map(link => <li key={link.href}>
                <a href={link.href}>{link.label}</a>
            </li>)}
            </ul>
        </nav>
    )
 }
 export default FooterLinks
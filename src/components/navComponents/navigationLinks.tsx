const links = [
  {label: "Home", href: "#home"},
  {label: "Contact", href: "#contact"},
  {label: "About", href: "#about"}
]

interface NavProp{
  listClass: string,
  onNavigate?: () => void
}

function NavigationLinks({listClass, onNavigate}:NavProp) {
  return (
     <ul className={listClass}>
     {links.map(({label, href}) => <li key={href}>
      <a href={href} onClick={onNavigate}>{label}</a>
     </li>)}
     </ul>
  );
}
export default NavigationLinks

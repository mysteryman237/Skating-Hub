import { NavLink } from "react-router-dom";

const links = [
  {label: "Home", to: "/"},
  {label: "Contact", to: "/contact"},
  {label: "About", to: "/about"}
]

interface NavProp{
  listClass: string,
  onNavigate?: () => void
}

function NavigationLinks({listClass, onNavigate}:NavProp) {
  return (
     <ul className={listClass}>
     {links.map(({label, to}) => <li key={to}>
      <NavLink to={to} end={to === "/"}
             className={({isActive}) => isActive ? "text-white border-b-2 border-white"
                                     : "text-slate-300 hover:text-white border-b-2 border-transparent" }
               onClick={onNavigate}>{label}</NavLink>
     </li>)}
     </ul>
  );
}
export default NavigationLinks

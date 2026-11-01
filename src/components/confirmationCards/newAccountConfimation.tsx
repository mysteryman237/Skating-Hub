import { Link } from "react-router-dom"
import { TiTickOutline } from "react-icons/ti";
import { newAccountStyles } from "./confirmationStyles";


function NewAccountConfirmation(){

return(
    <section className={newAccountStyles.section}>
        <header>
            <h1 className={newAccountStyles.heading}>Success!</h1>
            <p className={newAccountStyles.paragrapg}>Your data has been submited</p>
        </header>
       <span className={newAccountStyles.iconContainer}>
          <TiTickOutline  className="size-60 md:size-100 text-[#0ee2b8]"/>
       </span>
        <Link to={"/PriceSection"} className={newAccountStyles.link} >Continue</Link>
    </section>
)
}
export default NewAccountConfirmation
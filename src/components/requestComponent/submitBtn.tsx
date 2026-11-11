import { requestFormStyles } from "./requestStyle"
import { useFormContext } from "react-hook-form"

function Btn(){
 const {formState:{isSubmitting}} =  useFormContext()
    return(
        <button type="submit" className={requestFormStyles.submitBtn}>
    {isSubmitting ? "Submitting..." : "Submit your request"}
    </button>
    )
}
export default Btn
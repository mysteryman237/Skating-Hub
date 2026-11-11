import { requestFormStyles } from "./requestStyle"
import { medicalConditions } from "../temDataStore/cardsData"
import { useFormContext, useWatch } from "react-hook-form"
import type { FormValues } from "./formValidation"


function MedicalSection(){
 
    const {register, control, setValue, formState: {errors}} = useFormContext<FormValues>()
    const hasAllergy = useWatch({control, name: "allergy"})

/* this function sets all values to false when none of the above is selected */
    const hasmedCondition = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked){
            setValue("allergy", false),
            setValue("boneFracture", false),
            setValue("asthmatic", false),
            setValue("allergyDetails", "")
        }
    }
    

    return(<>
    <fieldset>
   <legend className={requestFormStyles.paragraph}>
    To ensure the best care and safety for your child, please indicate if they have been diagnosed with any of the 
    following medical conditions. This information is kept strictly confidential and is used solely to provide appropriate support ""
   </legend>

     <div className={requestFormStyles.checkBoxWrapper}>
     {/* Render conditions from our data, map each condition to a label and checkbox */}
        {medicalConditions.map(({name, label}) => 
            <label key={name} className="flex items-center gap-2 font-bold text-indigo-900 md:p-2">
             <input type="checkbox"   {...register(name, {onChange: () => setValue("fullyFit", false)})}  />
                {label}
            </label>
        )}

        <label className="flex items-center gap-2 font-bold text-indigo-900 md: p-2"> 
            <input type="checkbox" {...register("fullyFit", {onChange: hasmedCondition})}/>
            None of the above
        </label>
     </div>
     {errors.fullyFit && <p className={requestFormStyles.error}>{errors.fullyFit.message}</p>}
   
   {/* If the is an allergy we display tis text area */}
      {hasAllergy && 
      <div className="mt-3 flex flex-col gap-2">
        <label htmlFor="hasAllergy" className={requestFormStyles.error}> What is the allergy? Any emergency instructions?</label>
        <textarea 
         id="hasAllergy"
         {...register("allergyDetails")}
          className={requestFormStyles.input}
          aria-invalid={!! errors.allergyDetails}/>
          {errors.allergyDetails && <p className={requestFormStyles.error}>{errors.allergyDetails.message}</p>}
        </div>}

    </fieldset>

    </>)
}
export default MedicalSection
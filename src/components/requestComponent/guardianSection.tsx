import { relationship } from "../temDataStore/cardsData";
import { requestFormStyles } from "./requestStyle";
import { useFormContext, useWatch } from "react-hook-form";
import type { FormValues } from "./formValidation";
import InputFields from "./requestInputField";


function GuadianSection(){

  /* Use forContext to tansport data from the useFrom in form componnent */
    const {register, control, formState: {errors}} = useFormContext<FormValues>()
    const sponsor = useWatch({control, name: "sponsor"})
    const guardian = sponsor === "parent" || sponsor === "sponsor"

    return(<>
   <fieldset className="w-full flex flex-col gap-[0.3rem]">
   <legend className={requestFormStyles.paragraph}>What is your relationship with the student ?</legend>

{/* render relationship options from data, map each relationship to a label and radio input */}
  <div className={requestFormStyles.radioBtnWrapper}>
    {relationship.map(({name, label}) => 
        <label key={name} className="flex items-center gap-2 font-bold text-indigo-900 md:p-2">
         <input type="radio"
          value={name}
          {...register("sponsor")} 
         />
            {label}
        </label>
    )}
  </div>
  {errors.sponsor && <p className={requestFormStyles.error}>{errors.sponsor.message}</p>}
</fieldset>

   {sponsor === "student" && 
   <p className={requestFormStyles.message}> Students without a parent or sponsor must be 18 years or older!</p>}

 {/* If spnsor is true we render this input */}
   {sponsor === "sponsor" && 
     <InputFields 
     label="What is your relationship with the student ?"
     placeholder="e.g brother, uncle, aunt etc"
     isRequired
     {...register("relationShip")}
     error={errors.relationShip?.message}/>}

     {guardian && 
     <InputFields 
     label={`Name of ${sponsor}`}
     placeholder="e.g TIKHAN"
     {...register('parent')}
     isRequired
     error={errors.parent?.message}/>}
</>)
}
export default GuadianSection
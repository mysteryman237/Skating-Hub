import { Controller, useFormContext, Watch } from "react-hook-form"
import type { FormValues } from "./formValidation"
import InputFields from "./requestInputField"
import Nationality from "./nationalitySelect"
import { requestFormStyles } from "./requestStyle"

interface StudentProp{
    onPhotoSelect: (pic: File) => void
}

function StudentSection({onPhotoSelect}:StudentProp){

const {register, control, setValue, formState:{errors}} = useFormContext<FormValues>()

    return(
        <>
        <InputFields  
        label="Student Passport size Photo"
        error={errors.photo?.message} isRequired
        id="photo"
        type="file" 
        accept="image/*"
       onChange={(e) => {
        const file = e.target.files?.[0] as File
        if(file) setValue('photo', file, {shouldValidate: true});
         onPhotoSelect(file)
       }}
        />
       
       <InputFields
         {...register("student")}  
         id="student"
         label="Name Of Student"
         error={errors.student?.message}
         isRequired
         placeholder="e.g KHALEM ZHOH"
       />

       <InputFields 
       {...register("date")}
       id="date"
       label="Date of birth"
       isRequired
       error={errors.date?.message}
       type="date"
       />

       <Controller 
       control={control}
       name="nationality"
       render={({field}) => <Nationality  {...field}/>}
       />
       {errors.nationality && <p aria-invalid={!! errors.nationality} className={requestFormStyles.error}>{errors.nationality.message}</p> }
       
        </>
    )
}
export default StudentSection
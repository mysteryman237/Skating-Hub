import { useForm, FormProvider, Form} from "react-hook-form"
import {type FormValues, requestSchema } from "./formValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import StudentSection from "./studentSection"
import GuadianSection from "./guardianSection"
import { requestFormStyles } from "./requestStyle"
import MedicalSection from "./mdicalSection"
import Btn from "./submitBtn"



function RequestForm({onPhotoChange}:{onPhotoChange: (pic: File) => void}){

const formMethods = useForm<FormValues>({
    resolver: zodResolver(requestSchema), 
    defaultValues: {
       allergy: false,
       asthmatic: false,
       boneFracture: false,
       fullyFit: false,
       allergyDetails: ""
    }
})
    return(
      <FormProvider {...formMethods}>
        <form noValidate className={requestFormStyles.form} onSubmit={formMethods.handleSubmit(data => {
      
          console.log(data)
        })}>
           <StudentSection onPhotoSelect={onPhotoChange}/>
           <GuadianSection /> 
           <MedicalSection />
           <Btn /> 
        </form>
      </FormProvider> 
    )
}
export default RequestForm
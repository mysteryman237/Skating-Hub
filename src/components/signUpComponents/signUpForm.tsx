import { formStyles } from "./signUpStyle"
import InputField from "./inputField"
import{ signUpSchema, type SignUpFormDataValues } from "./signUpFormValidation"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"

function SignUpForm(){
    const navigate = useNavigate()

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<SignUpFormDataValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {terms: false}
    })
   return (
    <form  className={formStyles.form} noValidate onSubmit={handleSubmit(data => {
        console.log(data)
       navigate("/NewAccountConfirmation")

        reset()
    })}>
        <h1 className={formStyles.title}>Create Account</h1>
        
        {/* we use our InputFied component to create all the necessary inputs. Note that our labels
        have the aria-hidden attribute because we don't want to display the labels as per design requirements
        but screen readers can read them */}
        <InputField {...register('fullName')} type="text" id="fullName" label="Full Name" error={errors.fullName?.message} 
        autoComplete="fullName" aria-invalid={!! errors.fullName} aria-describedby="fullName-error" />
       
        <InputField {...register('email')} type="email" id="email" label="Email" error={errors.email?.message}
         autoComplete="email" aria-describedby="email-error" aria-invalid={!! errors.email}/>
        
        <InputField {...register('phone')} type="tel" id="phone" label="Phone Number" error={errors.phone?.message}
         autoComplete="tel" aria-invalid={!! errors.phone} aria-describedby="phone-error"/>

        <InputField {...register('password')} type="password" id="password" label="Password" error={errors.password?.message}
         autoComplete="new-password" aria-invalid={!! errors.password} aria-describedby="password-error"/>

        <InputField {...register('confirmPassword')} type="password" id="confirmPassword" error={errors.confirmPassword?.message}
        label="Confirm Password" autoComplete="new-password" aria-invalid={!! errors.confirmPassword}
         aria-describedby="confirmPassword-error"/>
       
       {/* Because the design for the check box is different we use normal input and label here */}
        <label className={formStyles.termsContainer}>
          <input {...register('terms')} type="checkbox" aria-describedby="terms-error"/>
         <span className={formStyles.termsPara}>
            I agree to the <Link to="/terms" className="underline">Terms of Service</Link> and{" "}
          <Link to="/privacy" className="underline">Privacy Policy</Link>
          </span>
       </label>
       {errors.terms && <p role="alert" id="term-error" className={formStyles.alert}>{errors.terms.message}</p>}
       
        <button type="submit" className={formStyles.submitBtn} disabled={isSubmitting}>Sign Up</button>
    </form>
)
}
export default SignUpForm


import { formStyles } from "./signUpStyle"
import InputField from "./inputField"
import z  from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

/* Create this schema for data shape using zod object */
const schema = z.object({
    fullName: z.string().min(1,{error: "Name is required"}).min(4, {error: "Name must be at least 4 characters"}).max(50).trim(),
    email: z.email({error: "Enter a valid email"}).max(50),
    phone: z.string({error: "Enter your phone number"}).min(1, {error: "Phone number required"}).regex(/^\+?\d{7,15}$/, { error: "Invalid phone number" }),
    password: z.string({error:"Password required"}).min(1, {error: "Password required"}).min(6, {error: "Password must be at least 6 characters"}).max(20),
    confirmPassword: z.string({error: "Confirm Password"}).min(1, {error: "Confirm password"}).max(20),
    terms: z.boolean().refine(v => v === true, {error: "Accept the terms and conditions"})
    /* This logic is to compare password match */
}).refine(d => d.password === d.confirmPassword, {
    error: "passwords do not match",
    path: ["confirmPassword"]
})
/* This is our data type that we pass in useForm hook */
type SignUpFormData = z.infer<typeof schema>

function SignUpForm(){
    const {register, handleSubmit, reset, formState: {errors}} = useForm<SignUpFormData>({
        resolver: zodResolver(schema),
        defaultValues: {terms: false}
    })
return (
    <form  className={formStyles.form} noValidate onSubmit={handleSubmit(data => {
        console.log(data)
        reset()
    })}>
        <h1 className={formStyles.title}>Create Account</h1>
        
        {/* we use our InputFied component to create all the necessary inputs. Note that our labels
        have the aria-hidden attribute because we don't want to display the labels as per design requirements
        but screen readers can read them */}
        <InputField {...register('fullName')} type="text" id="fullName" label="Full Name" 
        autoComplete="fullName" aria-invalid={!! errors.fullName} aria-describedby="fullName-error" />
        {errors.fullName && 
        <p role="alert" id="fullName-error" className={formStyles.alert}>{errors.fullName.message}</p>}

        <InputField {...register('email')} type="email" id="email" label="Email"
         autoComplete="email" aria-describedby="email-error" aria-invalid={!! errors.email}/>
        {errors.email && 
        <p role="alert" id="email-error" className={formStyles.alert}>{errors.email.message}</p>}

        <InputField {...register('phone')} type="tel" id="phone" label="Phone Number"
         autoComplete="tel" aria-invalid={!! errors.phone} aria-describedby="phone-error"/>
        {errors.phone && 
        <p role="alert" id="phone-error" className={formStyles.alert}>{errors.phone.message}</p>}

        <InputField {...register('password')} type="password" id="password" label="Password"
         autoComplete="new-password" aria-invalid={!! errors.password} aria-describedby="password-error"/>
        {errors.password &&
         <p role="alert" id="password-error" className={formStyles.alert}>{errors.password.message}</p>}

        <InputField {...register('confirmPassword')} type="password" id="confirmPassword" 
        label="Confirm Password" autoComplete="new-password" aria-invalid={!! errors.confirmPassword}
         aria-describedby="confirmPassword-error"/>
        {errors.confirmPassword && 
        <p role="alert" id="confirmPassword-error" className={formStyles.alert}>{errors.confirmPassword.message}</p>}
       
       {/* Because the design for the check box is different we use normal input and label here */}
        <label className={formStyles.termsContainer}>
          <input {...register('terms')} type="checkbox" aria-describedby="terms-error"/>
         <span className={formStyles.termsPara}>
            I agree to the <a href="/terms" className="underline">Terms of Service</a> and{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>
          </span>
       </label>
       {errors.terms && <p role="alert" id="term-error" className={formStyles.alert}>{errors.terms.message}</p>}
        <button type="submit" className={formStyles.submitBtn}>Sign Up</button>
    </form>
)
}
export default SignUpForm


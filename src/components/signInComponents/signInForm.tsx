import { useForm } from "react-hook-form";
import { formStyles } from "./signInStyles";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../signUpComponents/inputField";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.email({ error: "Enter a valid email" }).max(50),
  password: z.string().min(1, { error: "Enter your password" }),
});
type SignInData = z.infer<typeof schema>;
function SignInForm() {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<SignInData>({ resolver: zodResolver(schema) });

  return (
    <form noValidate className={formStyles.form} onSubmit={handleSubmit((data) =>{
       alert("Log in Succesfull")
       navigate("/")
       })}>
     
      <h1 className={formStyles.title}>Sign In</h1>
    <InputField {...register("email")} label="Email" type="email" autoComplete="email" id="email"
     aria-invalid={!! errors.email} aria-describedby={errors.email ? "email-error" : undefined}/>
     {errors.email && <p id="email-error" role="alert" className={formStyles.errorText}>{errors.email.message}</p>}

    <InputField {...register("password")} label="Password" type="password" autoComplete="current-password" 
    aria-invalid={!! errors.password} aria-describedby={errors.password ? "password-error" : undefined}/>
    {errors.password && <p id="password-error" role="alert" className={formStyles.errorText}>{errors.password.message}</p>}

    <div className="flex justify-between w-full p-4 flex-wrap gap-2 font-semibold">
      <p>Don't have an account ? <a href="#" className={formStyles.passwordLinks}>Sign Up</a> </p>
      <a href="#" className={formStyles.passwordLinks}>Forgot password</a>
    </div>
   
      <button type="submit" className={formStyles.submitBtn} disabled={isSubmitting}> Sign In</button>
    </form>
  );
}
export default SignInForm;

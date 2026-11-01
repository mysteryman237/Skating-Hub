import { signInStyle } from "./signInStyles";
import SignInCard from "./signInCard";
import SignInForm from "./signInForm";

function SignIn(){
return(
        <section className={signInStyle.section}>
        <div className={signInStyle.wrapper}>
             <div className={signInStyle.circleDesign} aria-hidden="true"/>
             <SignInCard />
             <SignInForm />
        </div>
        </section>
)
}
export default SignIn
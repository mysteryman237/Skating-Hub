import { signInStyle } from "./signInStyles";
import SignInCard from "./signInCard";
import SignInForm from "./signInForm";
import { mainStyle } from "../mainComponents/mainStyles";

function SignIn(){
return(
    <main className={mainStyle.main}>
        <section className={signInStyle.section}>
        <div className={signInStyle.wrapper}>
             <div className={signInStyle.circleDesign} aria-hidden="true"/>
            <div className={signInStyle.gridDesign} aria-hidden="true"/>
            <div className={signInStyle.glowingDesign}></div>
             <SignInCard />
             <SignInForm />
        </div>
        </section>
    </main>
)
}
export default SignIn
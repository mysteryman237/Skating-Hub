import SignUpCard from "./signUpCard"
import SignUpForm from "./signUpForm"
import { signUpStyle } from "./signUpStyle"

function SignUp(){


    return(
    <section className={signUpStyle.section}>
        <div className={signUpStyle.wrapper}>
            <SignUpCard />
            <SignUpForm />
        </div>
    </section>
    )

}
export default SignUp
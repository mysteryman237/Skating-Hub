import { mainStyle } from "../mainComponents/mainStyles"
import SignUpCard from "./signUpCard"
import SignUpForm from "./signUpForm"
import { signUpStyle } from "./signUpStyle"

function SignUp(){


    return(
    <main className={mainStyle.main}>
        <section className={signUpStyle.section}>
            <div className={signUpStyle.wrapper}>
                <SignUpCard />
                <SignUpForm />
            </div>
        </section>
    </main>
    )

}
export default SignUp
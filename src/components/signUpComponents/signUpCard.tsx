import { TbWorldHeart } from "react-icons/tb";
import { formCardStyles } from "./signUpStyle";


function SignUpCard(){


    return(
        <article className={formCardStyles.article}>
            <header className={formCardStyles.hearder}>
                <p className={formCardStyles.headerTitle}>Welcome</p>
                <p className="text-slate-300"></p>
            </header>
            <div className={formCardStyles.bodyContainer}>
                <h2 className={formCardStyles.title}>
                    Learn From World's<br/> Best Instructor{" "}
                    <TbWorldHeart size={34} color="green" className={formCardStyles.icon} aria-hidden="true"/>
                    <br/> Around The World.</h2>
                <img src="/images/iceSkate1.webp" alt="Roller Skate" className={formCardStyles.image}/>
            </div>
        </article>
    )
}
export default SignUpCard
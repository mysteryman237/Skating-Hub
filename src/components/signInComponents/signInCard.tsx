import { TbWorldHeart } from "react-icons/tb";
import { formCardStyles } from "./signInStyles";


function SignInCard(){


    return(
        <article className={formCardStyles.article}>
           <div className={formCardStyles.gridDesign} aria-hidden="true"/>
           <div className={formCardStyles.middleCircle} aria-hidden="true"/>
           <div className={formCardStyles.leftCircle} aria-hidden="true"/>
           <div className={formCardStyles.bodyContainer}>
           <h2 className={formCardStyles.title}>
                    Learn From World's<br/> Best Instructor{" "}
                    <TbWorldHeart size={34} color="amber-400" className={formCardStyles.icon} aria-hidden="true"/>
                    <br/> Around The World.</h2>
                <img src="/images/iceSkate1.webp" alt="Roller Skate" className={formCardStyles.image}/>
            </div>
        </article>
    )
}
export default SignInCard
import { heroStyles, mainStyle } from "./mainStyles"

function HeroSection(){

return(
    <section className={heroStyles.heroContainer}>
        <video src="/video/hero.mp4" autoPlay muted loop playsInline className={heroStyles.video}></video>
        <h1 className={heroStyles.title}> At
            <span className={heroStyles.headingSpan}> SNOW<span className={heroStyles.nameStyle}>M.I.A</span></span> <br/> 
            skate with confidence</h1>
        <p className={heroStyles.subtitle}>Structured training for beginners and advanced skaters, classes available for all age group <br/> four years and above</p>
       <button className={heroStyles.heroBtn}>Book a free session</button>
      {/* <div className={mainStyle.herSecOverlay}></div> */}
    </section>
)
}
export default HeroSection
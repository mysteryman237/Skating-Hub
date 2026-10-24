import { priceSection } from "./mainStyles"
import { cardStore } from "../temDataStore/cardsData";
import Card from "./card";


function PriceSection(){

    return(
       <section className={priceSection.section}>
      {/* <div className={mainStyle.priceSecOverlay}></div> */}
        <img src="/images/kids.webp" alt="Street skate" loading="lazy" className={priceSection.image} />
        <div className={priceSection.overLay}></div>
       <header className={priceSection.header}>
        <h2 className={priceSection.heading}>Simple pricing based<br/> on your level</h2>
        <p className={priceSection.headerParagraph}>Discover a variety of our<br/> advanced options. Easy and safe for individuals</p>
       </header>
       <div className={priceSection.cardsContainer}>
         {cardStore.map(card => <Card  key={card.title} carddata={card} />)}
       </div>
       </section>
    )
}
export default PriceSection
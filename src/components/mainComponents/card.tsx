import { LiaHandPointRightSolid } from "react-icons/lia"
import { cardStyles } from "./mainStyles"

interface CardProp{
   carddata: { title: string,
    priceTitle: string,
    price: number,
    priceDuration: string,
    description: string,
    buttonText: string,
    features: string,
    list: string[],
    bgColor: string
   }
}
function Card({carddata}:CardProp){

return (
    <article className={`${cardStyles.article} ${carddata.bgColor}`}>
                <header className={`${cardStyles.cardHeader}`}>
                    <h4 className={cardStyles.cardTitle}>{carddata.title}</h4>
                </header>
                <div className={cardStyles.planPriceContainer}>
                    <div>
                        <span>{carddata.priceTitle}</span>
                        <p className={cardStyles.priceDuration}><span className={cardStyles.planPrice}>{carddata.price}AED</span >{carddata.priceDuration}</p>
                    </div>
                    <p className={cardStyles.planDes}>{carddata.description}</p>
                    <button className={cardStyles.priceBtn}>{carddata.buttonText}</button>
                </div>
                <footer>
                    <h4>{carddata.features}</h4>
                    <ul >{  
             carddata.list.map((item, index) => 
             <li className={cardStyles.planList} key={index}>
            <LiaHandPointRightSolid color="darkblue"/>{item}</li>)   
                     }</ul>
                </footer>
            </article>
)
}
export default Card
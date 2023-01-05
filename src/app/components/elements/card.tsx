import React from "react";
import '../../../styles/cardStyles.css'
import { Icon } from "@fluentui/react";

export default function DisplayCards(){
    let cardsList = [{cardtype: "Car Insurence", cardNumber: 43782674567, cardBalance: 2347.08, cardExpiry: "06/22", cardColor: "#00019e", cardIcon: "Car"},
                    {cardtype: "Health Insurence", cardNumber: 43782674567, cardBalance: 2347.08, cardExpiry: "06/22", cardColor: "#69036c", cardIcon: "Heart"},
                    {cardtype: "Health Insurence", cardNumber: 43782674567, cardBalance: 2347.08, cardExpiry: "06/22", cardColor: "#15766b", cardIcon: "Contact"}]

    let cards = []
    for(let i=0; i<cardsList.length; i++){
        cards.push(<InsurenceCard cardNumber={cardsList[i].cardNumber} cardType={cardsList[i].cardtype}
            cardBalance={cardsList[i].cardBalance} cardExpiry={cardsList[i].cardExpiry} cardColor={cardsList[i].cardColor} 
            cardIcon = {cardsList[i].cardIcon}/>)
    }

    return (
        <ul className="cards-list">
            <h3>Yours Cards</h3>
            <p>Add and manage cards here</p>
                {cards}

            <li className="user-card add-cards"> Add Cards + </li>
            <a className="float-right" href="#">Know more</a>
        </ul>)
}

export function InsurenceCard(props:any){
    return(
    <div className="user-card" style={{ backgroundColor:props.cardColor}}>
        <p className="user-card-type">{props.cardType}</p>
        <Icon className="user-card-type-img" iconName={props.cardIcon} styles={{root:{fontSize: 20, color: "#a5a6d4", fill: "#a5a6d4"}}}/>
        <p className="user-card-number">{props.cardNumber}</p>
        <p className="user-card-balance">$ {props.cardBalance}</p>
        <p className="user-card-expiry">{props.cardExpiry}</p>
    </div>)
}
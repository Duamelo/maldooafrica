import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import img from '../../images/pizza.png';
import './Card.css'

function Card({titre, description, price}) {
    return (
        <div className="card-poco">
            <div className="card-poco-div-img">
                <div className="card-poco-div-img-inside">
                    <span className="card-poco-span-sale">Sale!</span>
                    <span className="card-poco-icon-love"><FontAwesomeIcon icon={faHeart}/></span>
                </div>
                <div className="card-img">
                    <img className="inner-img" src={img} alt="" srcset="" />
                </div>
            </div>
            <div className="card-poco-div-describe">
                <h3>{titre}</h3>
                <p>{description}</p>
                <div className="more-describe">
                    <span className="price">{price} FCFA</span>
                    <span className="basket-content">
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card

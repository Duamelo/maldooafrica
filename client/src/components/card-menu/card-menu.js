import React from 'react';
import { Link } from 'react-router-dom';
import './card-menu.css';
//images

import pizza from "../../images/pizza.png";
import basket from "../../images/shopping.png";



function cardMenu() {
    return <>
    <li className="col-lg-2 product-item">
        <div className="product-list-inner">
        <a href="/"> <img src={pizza} alt=""></img> </a>
        <div className="product-content">
            <div className="start-rating">
            <span>
                {/*<Rate disabled defaultValue={2} />*/}
            </span>
            </div>
            <Link className="product-title" to="#"><span>Delicious pizza</span></Link>
            <span className="price">
                1000 FCFA
            </span>
            <div className="short-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod 
                    
            </div>
            <Link className="button" to="#"> <img src={basket} alt=""></img> </Link>
        </div>
        </div>                      
    </li>
    </>
}

export default cardMenu;

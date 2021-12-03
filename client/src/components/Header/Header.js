import React from 'react';
import plate from '../../images/plate.jpg';
import './Header.css';

function Header() {
    return (
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5 header-txt">
                            <h1 className="display-3 header-title">Maldoo <span>Africa</span></h1>
                            <h5 className="header-span-one">Lorem ipsum dolor sit amet</h5>
                            <span className="header-span-two">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, ad!</span>
                            <div className="header-content-price mb-3 mt-4">
                                <button type="button" class="btn btn-outline-warning btn-lg">Commande</button>
                                <span className="header-price"> 1000 FCFA </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={plate} alt="" className="header-img-container"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

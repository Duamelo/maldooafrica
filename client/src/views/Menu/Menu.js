import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

import CardMenu from "../../components/card-menu/card-menu";
//images


import scooter from '../../images/icons8-scooter-68.png';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';



function Menu() {
    return <>
        <NavBar/>
         <section className="header-menu">
            <div class="jumbotron jumbotron-fluid ">
                <div class="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Menu Maldoo</h1>
                            <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item base-page"><Link to="#" className="base-page">Home</Link></li>
                                    <li class="breadcrumb-item  current-page" aria-current="page">menu maldoo</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <h2 className="menu-tabs-title">Menu du jour</h2>
        <section className="menu-tabs-content  product-list">
            <div className="container-fluid">
                <ul className="row products">
                   <CardMenu/>
                   <CardMenu/>
                   <CardMenu/>
                   <CardMenu/>
                   <CardMenu/> 
                   <CardMenu/>
                </ul>
            </div>
        </section>
        <section className="container-fluid widjet-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="shipping-delevery-guarantee">
                            <div className="icon-box-wrapp">
                                <div className="icon-box-icon">
                                    <span className="icon animation"> <img src={scooter} alt="scooter"></img></span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free shipping</h3>
                                    <p className="icon-box-description"> Sign up for updates and get free shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="shipping-delevery-guarantee">
                            <div className="icon-box-wrapp">
                                <div className="icon-box-icon">
                                    <span className="icon animation"> <img src={scooter} alt="scooter"></img></span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">30 Minutes Delivery</h3>
                                    <p className="icon-box-description"> Everything you order will quickly delivered to your door. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="shipping-delevery-guarantee">
                            <div className="icon-box-wrapp">
                                <div className="icon-box-icon">
                                    <span className="icon animation"> <img src={scooter} alt="scooter"></img></span>                                
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Bast Quality Guarantee</h3>
                                    <p className="icon-box-description"> Maldoo is an international chain of family restaurants. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
}

export default Menu;

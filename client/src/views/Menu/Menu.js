import React from 'react';
import { Breadcrumb } from 'antd';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Menu.css'

//images

import pizza from "../../images/pizza.png";
import basket from "../../images/shopping.png";
import scooter from '../../images/icons8-scooter-68.png';


function Menu() {
    return <>
         <section className="header-menu">
            <div class="jumbotron jumbotron-fluid ">
                <div class="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Menu Maldoo</h1>
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <span className="ant-breadcrumb-link"> Menu Maldoo</span>
                            </Breadcrumb>
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
                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}

                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}

                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}

                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}
                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}
                    <li className="col-lg-2 product-item">
                        <div className="product-list-inner">
                        <a href="/"> <img src={pizza} alt=""></img> </a>
                        <div className="product-content">
                            <div className="start-rating">
                            <span>
                              <Rate disabled defaultValue={2} />
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
                    {/*   another item */}
                   
                </ul>
            </div>
        </section>

        <section className="widjet-container">
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

    </>
}

export default Menu;

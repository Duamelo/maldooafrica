import React from 'react'
import logo from '../../images/flavicon.png';
import visa from '../../images/visa.png';
import './Footer.css'

function Footer() {
    return <>
        <div className="footer">
            <div className="container">
                <div className="footer-logo">
                    <div className="footer-contain-img">
                        <img className="footer-img" src={logo} alt="" srcset="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm footer-min-section">
                        <h5 className="footer-title">Adresse</h5>
                        <p>Lorem, ipsum dolor. <br />
                        Lorem, ipsum dolor. <br />
                        Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-sm footer-min-section">
                        <h5 className="footer-title">Commander un plat</h5>
                        <p>Lorem ipsum dolor sit amet. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                        <span className="footer-number">+229 62614498</span></p>
                    </div>
                    <div className="col-sm footer-min-section">
                        <h5 className="footer-title">Heures d'ouverture</h5>
                        <p>
                            <ul className="footer-list-day">
                                <li>Lundi-Vendredi : <span className="footer-dateHour-list">8h - 16h</span></li>
                                <li>Samedi : <span className="footer-dateHour-list">9h - 17h</span></li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-sm footer-min-section">
                        <h5 className="footer-title">Newsletter</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div class="input-group subscribe">
                            <input type="text" class="form-control" placeholder="Your email" aria-label="Your email" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-warning" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
        <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p>
                        Copyright © 2022
                        <a href="/#">
                            <span className="sub-footer-span">maldooafrica</span>
                        </a>
                        . All Rights Reserved.
                        </p>

                    </div>
                    <div className="col-sm">
                        <div className="col">
                            <img className="footer-icon" src={visa} alt="" srcset="" />
                        </div>
                        <div className="col">
                            <img className="footer-icon" src={visa} alt="" srcset="" />
                        </div>
                        <div className="col">
                            <img className="footer-icon" src={visa} alt="" srcset="" />
                        </div>
                        
                         
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer

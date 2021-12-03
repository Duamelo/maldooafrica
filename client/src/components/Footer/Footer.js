import React from 'react'
import logo from '../../images/flavicon.png';
import './Footer.css'

function Footer() {
    return (
        <footer>
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
                        <input type="text" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

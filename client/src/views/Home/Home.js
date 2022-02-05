import React, {useEffect, useRef} from 'react'
import Header from '../../components/Header/Header'
import motar from '../../images/Group 75.png';
import burger from '../../images/Group 74.png';
import Button from '../../components/Button/Button';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from "../../components/Footer/Footer";

function Home() {
    const motarImg = useRef(null);

    useEffect(()=>{
        console.log(motarImg.current.style);
        console.log(window.scrollY);

        
    });

    return (
        <>
            <NavBar/>
            <Header/>

            <section className="container-fluid first-section-home">
                <div className="row">
                    <div className="col-md first-section-home-img">
                        <img src={burger} alt="" className="first-section-home-img-burger"/>
                    </div>
                    <div className="col-md first-section-home-div">
                        <span className="first-section-home-div-preH2">About Our Food</span>
                        <h2 className="first-section-title">
                        From Texas with American Love
                        </h2>

                        <p className="first-section-paragraphe">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit fuga consectetur quidem omnis sapiente possimus, rem impedit quaerat porro nesciunt dolorem atque ullam cum accusamus dicta et. Quaerat rerum, sit quo quis accusantium quibusdam! Est neque nesciunt rerum repudiandae commodi vitae? Vitae saepe alias ad, fuga error placeat nesciunt?
                        </p>

                        <Button link="/shop">Commande</Button>
                    </div>
                </div>
            </section>

            <div className="upper-section">
                <section className="container-fluid motar-container">
                    <div className="row">
                        <div className="col-lg section-motar-describe">
                            <h2 className="section-title-motar">
                                Choose what you want, select a pick up time
                            </h2>

                            <p className="section-paragraphe-motar">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt. Mollitia sint hic perferendis assumenda, dignissimos maxime distinctio pariatur quasi.
                            </p>

                            <Button link="/shop">Commande</Button>
                        </div>
                        <div className="col-lg">
                            <img ref={motarImg} src={motar} alt="motar" className="motar-img"/>
                        </div>
                        <div className="col-lg section-motar-describe">
                            <h2 className="section-title-motar text-lg-end">
                                Choose what you want, select a pick up time
                            </h2>

                            <p className="section-paragraphe-motar text-lg-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt. Mollitia sint hic perferendis assumenda, dignissimos maxime distinctio pariatur quasi.
                            </p>

                            <div className="float-end">
                                <Button link="/shop">Commande</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="testimonies">
                
            </section>

            <section className="container-fluid ml-0 presentation">
                <div className="row">
                    <div className="col-sm-4 meals">
                        <div className="meals-wrap">
                            <div className="meals-widget-wrap">
                                <div className="meals-content">
                                    <div className="meals-widget-container-one">
                                        <h3 className="meals-title">Fast Food</h3>
                                    </div>
                                </div>
                                <div className="meals-content">
                                    <div className="meals-widget-container-two">
                                        <h2 className="meals-heading-title">meals</h2>
                                    </div>
                                </div>
                                <div className="meals-paragraph-content">
                                    <div className="meals-widget-container-three">
                                        <div className="meals-text-editor">
                                            New phenomenon
                                            <br/>
                                            burger taste
                                        </div>
                                    </div>
                                </div>
                                <div className="meals-price-content">
                                    <div className="meals-widget-container-four">
                                        <h2 className="meals-heading-title2"> $19.90</h2>
                                    </div>
                                </div>
                                <div className="meals-button-content">
                                    <div className="meals-widget-container-five">
                                        <div className="meals-button-wrapper">
                                            <Link to="/shop" className="meals-button-link"> Commande </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* template 1 */}
                    <div className="col-sm-4 meals">
                        <div className="meals-wrap">
                            <div className="meals-widget-wrap">
                                <div className="meals-content">
                                    <div className="meals-widget-container-one">
                                        <h3 className="meals-title">House</h3>
                                    </div>
                                </div>
                                <div className="meals-content">
                                    <div className="meals-widget-container-two">
                                        <h2 className="meals-heading-title">Burgers</h2>
                                    </div>
                                </div>
                                <div className="meals-paragraph-content">
                                    <div className="meals-widget-container-three">
                                        <div className="meals-text-editor">
                                            New phenomenon
                                            <br/>
                                            burger taste
                                        </div>
                                    </div>
                                </div>
                                <div className="meals-price-content">
                                    <div className="meals-widget-container-four">
                                        <h2 className="meals-heading-title2"> $12.90</h2>
                                    </div>
                                </div>
                                <div className="meals-button-content">
                                    <div className="meals-widget-container-five">
                                        <div className="meals-button-wrapper">
                                            <Link to="/shop" className="meals-button-link"> Commande </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*template two */}
                    <div className="col-sm-4 meals">
                        <div className="meals-wrap">
                            <div className="meals-widget-wrap">
                                <div className="meals-content">
                                    <div className="meals-widget-container-one">
                                        <h3 className="meals-title">Hot Fresh</h3>
                                    </div>
                                </div>
                                <div className="meals-content">
                                    <div className="meals-widget-container-two">
                                        <h2 className="meals-heading-title">Salats</h2>
                                    </div>
                                </div>
                                <div className="meals-paragraph-content">
                                    <div className="meals-widget-container-three">
                                        <div className="meals-text-editor">
                                            New phenomenon
                                            <br/>
                                            burger taste
                                        </div>
                                    </div>
                                </div>
                                <div className="meals-price-content">
                                    <div className="meals-widget-container-four">
                                        <h2 className="meals-heading-title2"> $10.90</h2>
                                    </div>
                                </div>
                                <div className="meals-button-content">
                                    <div className="meals-widget-container-five">
                                        <div className="meals-button-wrapper">
                                            <Link to="/shop" className="meals-button-link"> Commande </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm burger">

                    </div>
                    <div className="col-sm salats">

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home

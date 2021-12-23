import React, {useEffect, useRef} from 'react'
import Header from '../../components/Header/Header'
import motar from '../../images/Group 75.png';
import burger from '../../images/Group 74.png';
import Button from '../../components/Button/Button';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    const motarImg = useRef(null);

    useEffect(()=>{
        console.log(motarImg.current.style);
        console.log(window.scrollY);

        
    });

    return (
        <>
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

                        <button type="button" className="btn btn-outline-warning btn-lg">Commande</button>
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

                            <Button>Commande</Button>
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
                                <Button>Commande</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="testimonies">
                {/*<div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 4</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 5</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 6</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 7</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 8</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <div class="img-wrapper"><img src={plat} class="d-block w-100" alt="..."/> </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title 9</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                        card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>*/}
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
                                            <Link to="#" className="meals-button-link"> Commande </Link>
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
        </>
    )
}

export default Home

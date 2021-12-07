import React, {useEffect, useRef} from 'react'
import Header from '../../components/Header/Header'
import motar from '../../images/Group 75.png';
import burger from '../../images/Group 74.png';
import Button from '../../components/Button/Button';
import './Home.css';

function Home() {
    const motarImg = useRef(null);

    useEffect(()=>{
        console.log(motarImg.current.style);
        console.log(window.scrollY);

        
    });

    return (
        <div>
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

        </div>
    )
}

export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import "./Contact.css";
//images
import email from "../../images/icons8-email-64.png";
import phone from "../../images/icons8-phone-64.png";
import adress from "../../images/icons8-marqueur2-64.png";
import Footer from '../../components/Footer/Footer';

function Contact() {
    return <>
        <NavBar/>
        <section className="header-menu">
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Contact Maldoo</h1>
                            <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item base-page"><Link to="#" className="base-page">Home</Link></li>
                                    <li className="breadcrumb-item  current-page" aria-current="page">contactez-nous</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container-fluid mb-5 contact">
            <h2 className="fw-bold display-5 mt-5 mb-3">Call us or visit place</h2>
            <small className="text-muted ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            <div className="row mt-5 ">
                <div className="col-sm">
                    <img src={phone} alt="phone" className="mb-4"/>  <br />
                    <span className="fw-bold">Phone:</span><br />
                    <div className="text-muted mt-3">+229 61070775<br /></div>
                    <div className="text-muted">+229 61070775<br /></div>
                </div>
                <div className="col-sm">
                    <img src={adress} alt="adress" className="mb-4"/>  <br />
                    <span className="fw-bold">Address</span><br />
                    <div className="text-muted mt-3">Cotonou, lorem ipsum<br /></div>
                    <div className="text-muted">Cotonou, lorem ipsum<br /></div>
                </div>
                <div className="col-sm">
                    <img src={email} alt="email" className="mb-4"/>  <br />
                    <span className="fw-bold">Email:</span> <br />
                    <div className="text-muted mt-3">contact@example.com<br /></div>
                    <div className="text-muted">info@example.com<br /></div>
                </div>
            </div>
        </div>
        <div className="container-fluid contact">
        <div className="card mb-5">
            <div className="card-body row row-cols-2">
                <div className="col-sm">
                    <svg className='bd-placeholder-img card-img' width='100%' height='450'
                        xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder: Thumbnail'
                        preserveAspectRatio='xMidYMid slice' focusable='false'>
                        <title>Placeholder</title>
                        <rect width='100%' height='100%' fill='#ffffa0'></rect>
                    </svg>
                </div>
                <div className="col-sm">
                    <div className="fw-bold display-6">Send us a message</div>
                    <small className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    <div className="mb-3">
                        <label for="nameInput" className="form-label d-none">Name</label>
                        <input type="text" className="form-control" name="nameInput" id="nameInput"
                            aria-describedby="nameInputHelp" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="emailInput" className="form-label d-none">Email</label>
                        <input type="text" className="form-control" name="nameInput" id="nameInput"
                            aria-describedby="nameInputHelp" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <label for="subjectInput" className="form-label d-none">Subject</label>
                        <input type="text" className="form-control" name="subjectInput" id="subjectInput"
                            aria-describedby="subjectInputHelp" placeholder="Subject"/>
                    </div>
                    <div className="mb-3">
                        <label for="comment" className="form-label d-none">Comment</label>
                        <textarea className="form-control" name="comment" id="comment" rows="5"
                            placeholder="Comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning"><div className="fw-bolder p-2	">Submit</div></button>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
}

export default Contact

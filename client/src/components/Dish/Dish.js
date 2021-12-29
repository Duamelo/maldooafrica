import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from "../Footer/Footer";
import "./Dish.css";
import rice from "../../images/rice.png";
import Card from '../../components/Card/Card';


function Dish() {
    return <>
    <NavBar/>
    <div className="container-fluid dish-breadcrumb">
    <nav aria-label="breadcrumb" className="breadcrumb-arrow dish-breadcrumb-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="#" className="base-page">Home</Link></li>
            <li class="breadcrumb-item"><Link to="#" className="base-page">Category</Link></li>
            <li class="breadcrumb-item  current-page" aria-current="page">frite</li>
        </ol>
    </nav>
    </div>
    <section className="container-fluid  mt-5 mb-5">
        <div class="row row-cols-1 row-cols-lg-2 mb-5 dish-item">
            <div class="col-sm row row-cols-1">
                <div class="bg-light  card  shadow col ">
                    <img src={rice} alt="rice"/>
                </div>
                <div class="col row g-1">
                    <div class="col">
                        <div class="bg-light card ">
                            <img src={rice} alt="rice"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bg-light card ">
                            <img src={rice} alt="rice"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bg-light card ">
                            <img src={rice} alt="rice"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm dish-description">
                <h3 class="fw-bold display-4">BBQ chicken breast</h3>
                <p class="text-muted">A mighty meaty double helping of all the reasons you love our burger.</p>
                <small class="text-warning display-5 fw-bold">1000 FCFA </small>
                <small class="display-6 fw-bold text-decoration-line-through">1500 FCFA</small>
                <hr/>
                <div class="align-items-center d-flex justify-content-between ">
                    <div class="">
                        <button type="button" class="btn btn-warning p-1 button-rounded">
                            <i class="fa fa-minus"></i>
                        </button>
                        <label className="p-2">1</label>
                        <button type="button" class="btn btn-warning p-1 button-rounded">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div class="d-grid col-6 mx-0">
                        <button type="button" class="btn btn-warning p-2">
                            <i class="fa fa-cart-plus"></i>
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-warning">
                            <i class="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
                <hr/>
                <ul class="list-group">
                    <li class="list-group-item">Category: Pasta</li>
                    <li class="list-group-item">Share:
                        <div class="btn-group g-2" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">
                                <i class="fa fa-network-wired"></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary">
                                <i class="fa fa-network-wired"></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary">
                                <i class="fa fa-network-wired"></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary">
                                <i class="fa fa-network-wired"></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary">
                                <i class="fa fa-network-wired"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <hr/>
                <ul>
                    <li class="text-muted">Free global shipping on all orders</li>
                    <li class="text-muted">30 days easy returns if you change your mind</li>
                    <li class="text-muted">Order before noon for same day dispatch</li>
                </ul>
                <hr/>
                <h4 class="">Guaranteed Safe Checkout</h4>
            </div>
        </div>
    </section>
    <div class="mb-5">
		{/*<ul class="d-flex justify-content-center nav nav-pills">
			<li class="nav-item">
			
				<a class="display-5 fw-bold nav-link text-dark rounded-pill" aria-current="page" href="#">Active</a>
			</li>
			<li class="nav-item">
				<a class="display-5 fw-bold nav-link text-dark rounded-pill" href="#">Link</a>
			</li>
		</ul>
		<div class="container text-center text-dark text-muted">
			Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three
			soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s
			own paprika and cucumber mayonnaise add the crowning touch. Oh baby!

			Ingredients: Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss
			Cheese
		</div>*/}


           <ul class=" d-flex justify-content-center mt-5 nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">DESCRIPTION</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">REVIEWS(5)</a>
                </li>
            </ul>
            <div class="tab-content mt-5" id="pills-tabContent">
                <div class="tab-pane fade show active container text-center text-dark text-muted" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                	Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three
                    soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s
                    own paprika and cucumber mayonnaise add the crowning touch. Oh baby!

                    Ingredients: Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss
                    Cheese
                </div>
                <div class="tab-pane fade container text-center text-dark text-muted" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three
                    soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s
                    own paprika and cucumber mayonnaise add the crowning touch. Oh baby!

                    Ingredients: Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette, Pesto, Tomato, Swiss
                    Cheese
                </div>
                
            </div> 

		<table class="container table mt-5">
			<tbody>
				<tr>
					<td>
						<h5 class="fw-bolder">Pizza</h5>
						<small class="text-muted">28 cm size</small>
					</td>
					<td>
						<h5 class="fw-bolder">728</h5>
						<small class="text-muted">Energy/Kj</small>
					</td>
					<td>
						<h5 class="fw-bolder">728</h5>
						<small class="text-muted">Energy/Kj</small>
					</td>
					<td>
						<h5 class="fw-bolder">728</h5>
						<small class="text-muted">Energy/Kj</small>
					</td>
					<td>
						<h5 class="fw-bolder">728</h5>
						<small class="text-muted">Energy/Kj</small>
					</td>
				</tr>
				<tr>
					<td>Allergies</td>
					<td>Egg</td>
					<td>Allergies</td>
					<td>Egg</td>
					<td>Allergies</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container p-5 mb-5">
		<h5 class="fw-bolder display-5 text-center mb-5">PRODUITS SIMILAIRES</h5>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <Card/>
                </div>
                <div className="col">
                    <Card/>
                </div>
                <div className="col">
                    <Card/>
                </div>
            </div>
    </div>
    <Footer/>
    </>
}

export default Dish;

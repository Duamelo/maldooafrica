import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import "./WhisList.css";

//images
import pizza from '../../images/icons8-pizza-80.png';


function WhisList() {
    return <>
        <NavBar/>
        <section className="header-menu">
            <div class="jumbotron jumbotron-fluid ">
                <div class="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Whislist</h1>
                            <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item base-page"><Link to="#" className="base-page">Home</Link></li>
                                    <li class="breadcrumb-item  current-page" aria-current="page">Whislist</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid mb-5 p-4 card">
		<table class="table table-striped table-inverse table-responsive table-bordered">
			<tbody>
				<tr>
					<td scope="row">
						<div className="image-size"> <img src={pizza} alt="s" /> </div>
					</td>
					<td>
						<a class="fw-bold link-warning food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">In stock</small><br />
						<a class="fw-bold link-dark mt-3">Add to cart</a><br />
					
					</td>
				</tr>
				<tr>
					<td scope="row">
						<img src={pizza} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
			
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={pizza} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
				
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={pizza} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
					
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={pizza} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={pizza} alt="s" className="image-size" />
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={pizza} alt="s" className="image-size" />
					</td>
					<td>
						<a class=" link-warning fw-bold food-title" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
					
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <Footer/>
    </>
}

export default WhisList;

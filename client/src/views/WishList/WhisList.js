import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import "./WhisList.css";

//images
import frite from '../../images/frite.png';


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
						<div className="image-size"> <img src={frite} alt="s" /> </div>
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
						<img src={frite} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={frite} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={frite} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={frite} alt="s" className="image-size"/>
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={frite} alt="s" className="image-size" />
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
				<tr>
					<td scope="row">
                        <img src={frite} alt="s" className="image-size" />
					</td>
					<td>
						<a class=" link-warning" href="#">Apricot Chicken </a><br />
						<small class="text-warning fw-bold">£8.30</small>
						<small class="fw-bold text-decoration-line-through">£18.00</small><br />
						<small class="fw-bold text-muted">September 28, 2021</small><br />
					</td>
					<td>
						<small class="fw-bold text-muted">in stock</small><br />
						<a class="fw-bold link-dark">Add to cart</a><br />
						<a class="fw-bold link-dark">Views cart</a><br />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="p-3 d-flex justify-content-between mb-5">
		<div>
			Share:
			<div class="-group g-2" role="group" aria-label="Basic outlined example">
				<a type="a" class=" -outline-primary">
					<i class="fa fa-network-wired"></i>
				</a>
				<a type="a" class=" -outline-primary">
					<i class="fa fa-network-wired"></i>
				</a>
				<a type="a" class=" -outline-primary">
					<i class="fa fa-network-wired"></i>
				</a>
				<a type="a" class=" -outline-primary">
					<i class="fa fa-network-wired"></i>
				</a>
				<a type="a" class=" -outline-primary">
					<i class="fa fa-network-wired"></i>
				</a>
			</div>
		</div>
	</div>
        <Footer/>
    </>
}

export default WhisList;

import React from 'react';
import "./Shop.css";
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
//import Button from '../../components/Button/Button';


function Shop() {
    return <>
    <section className="header-menu">
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Shop Maldoo</h1>
                            <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item base-page"><Link to="#" className="base-page">Home</Link></li>
                                    <li className="breadcrumb-item  current-page" aria-current="page">shop maldoo</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="container-fluid">
        <div className="row">
			<div className="col-xl-9">
				<div className="d-flex justify-content-between mb-5">
					<p className="text-muted"> Showing 1–12 of 54 results </p>
					<div className="btn-group">
						<button type="button" className="btn btn-outline-secondary"> 1 </button>
						<button type="button" className="btn btn-outline-secondary"> 2 </button>
						<div className="dropdown open">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId"
								data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Default sorting
							</button>
							<div className="dropdown-menu" aria-labelledby="triggerId">
								<Link className="dropdown-item" to="#">Popularité</Link>
								<Link className="dropdown-item disabled" to="#">Disabled action</Link>
							</div>
						</div>
					</div>
				</div>
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
					<div className="col">
                        <Card/>
					</div>
					<div className="col">
                        <Card/>
					</div>
					<div className="col">
                        <Card/>
					</div>
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
				{/*<nav aria-label="..." className="p-5">
					<ul className="pagination">
						<li className="page-item disabled">
							<a className="page-link">Previous</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item active" aria-current="page">
							<a className="page-link" href="#">2</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#">Next</a>
						</li>
					</ul>
				</nav>*/}
			</div>
			<div className="col-xl-3 container">
				<div className="mb-3">
					<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
				</div>
				<div className="card mb-3">
					<div className="card-header">Categories</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<div>Burgers</div>
							<div>(9)</div>
						</li>
					</ul>
				</div>
				<div className="row row-cols-lg-1">
					<div className="mb-3 col">
						<label for="priceRange" className="form-label fw-bold">Filter by price</label>
						<hr />
						<input type="range" className="form-range" min="0" max="5" step="0.5" id="priceRange"/>
						<div className="mb-3">Price: £0 — £20</div>
						<button type="button" className="btn btn-warning mb-1">filter</button>
					</div>
					<div className="mb-4 col p-3 align-item-center">
						<h4>Fliter by Size</h4>
						<hr />
						<div className="btn-group me-2" role="group" aria-label="First group">
							<button type="button" className="btn btn-outline-warning">L</button>
							<button type="button" className="btn btn-outline-warning">M</button>
							<button type="button" className="btn btn-warning">S</button>
							<button type="button" className="btn btn-outline-warning">X</button>
						</div>
					</div>
				</div>
				<div className="row row-cols-1">
					<h4>Best deal</h4>
					<hr />
					<div className="card col mb-3">
						<div className="row g-0">
							<div className="col-md-4 d-flex align-items-center">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
									className="img-fluid" alt=""/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<button className="btn link-warning" href="#">Apricot Chicken </button>
									</h5>
									<p className="card-text text-muted">Crispy bacon, tasty ham, pineapple, onion</p>
									<div className="d-flex justify-content-between align-items-center">
										<small className="text-warning display-6 fw-bold">£18.30</small>
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-warning">Shop</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card col mb-3">
						<div className="row g-0">
							<div className="col-md-4 d-flex align-items-center">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
									className="img-fluid" alt=""/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<button className="btn link-warning" href="#">Apricot Chicken </button>
									</h5>
									<p className="card-text text-muted">Crispy bacon, tasty ham, pineapple, onion</p>
									<div className="d-flex justify-content-between align-items-center">
										<small className="text-warning display-6 fw-bold">£18.30</small>
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-warning">Shop</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card col mb-3">
						<div className="row g-0">
							<div className="col-md-4 d-flex align-items-center">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
									className="img-fluid" alt=""/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<button className="btn link-warning" href="#">Apricot Chicken </button>
									</h5>
									<p className="card-text text-muted">Crispy bacon, tasty ham, pineapple, onion</p>
									<div className="d-flex justify-content-between align-items-center">
										<small className="text-warning display-6 fw-bold">£18.30</small>
										<div className="btn-group">
											<button type="button" className="btn btn-sm btn-warning">Shop</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </section>
</>
}

export default Shop;

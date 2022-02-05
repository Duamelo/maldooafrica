import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import "./About.css";

function About() {
    return <>
	<NavBar/>
    <section className="header-menu">
            <div class="jumbotron jumbotron-fluid ">
                <div class="container">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">
                            <h1 className="header-menu-title">Maldoo</h1>
                            <nav className="breadcrumb-arrow" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item base-page"><Link to="#" className="base-page">Home</Link></li>
                                    <li class="breadcrumb-item  current-page" aria-current="page">à propos</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fluid mb-3">
				<div className="row mb-3">
					<div className="col-sm p-sm-5">
						<h3 className="text-title " >Welcome!</h3>
						<h4 className="text-header"> Best burger ideas &amp; traditions from the whole world</h4>
						<div className="text-muted">
							<p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam.
							</p>
							<p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non
								tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.
							</p>
						</div>
						    <Button link="/contact">Contact now</Button>
					</div>
					<div className="col-sm mt-3 mb-3">
                        
						<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image1-h4.jpg"
							alt="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image1-h4.jpg"  className="style-image"/>
                        {/*<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image1-h4.jpg" 
                        alt="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image1-h4.jpg" 
                         className="style-image"/>*/}
					</div>
				</div>
				<div className="container-fluid bg-dark">
					<div className="text-center text-light p-5">
						<h3>Make the thing Anything is Possible</h3>
						<div className="mb-3">Enjoy our luscious dishes wherever you want</div>
						<Button link="/shop">Order now</Button>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm p-sm-5">
						<h3 className="text-title-chicken">Our Quality</h3>
						<h4 className="text-header-chicken">Chicken</h4>
						<div className="text-muted">
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
						</div>
						<Button link="/shop">Order now</Button>
					</div>
					<div className="col-sm">
						<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							alt="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							/>

					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm">
						<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							alt="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							/>
					</div>
					<div className="col-sm p-sm-5">
						<h3 className="text-title-chicken">Our Quality</h3>
						<h4 className="text-header-chicken">Chicken</h4>
						<div className="text-muted">
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
						</div>
						<Button link="/shop">Order now</Button>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm p-sm-5">
						<h3 className="text-title-chicken">Our Quality</h3>
						<h4 className="text-header-chicken">Chicken</h4>
						<div className="text-muted">
							<p>
								Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled
								Chicken Topping are made from chickens raised without antibiotics and fed an all
								vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100%
								chicken breast meat.
							</p>
						</div>
						<Button link="/shop">Order now</Button>
					</div>
					<div className="col-sm">
						<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							alt="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png"
							/>

					</div>
				</div>
				<div id="carouselExampleCaptions" className="carousel slide mb-4" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
							className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
							aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
							aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
								xmlns="http://www.w3.org/2000/svg" role="img" aria-label=""
								preserveAspectRatio="xMidYMid slice" focusable="false">
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#777"></rect>
							</svg>
							<div className="carousel-caption d-none d-md-block">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-1.jpg"
									alt=""  className="rounded-image"/>
                                    <div className="ratings"> <i className="fa fa-star rating-color"></i> 
                                        <i className="fa fa-star rating-color"></i> <i className="fa fa-star rating-color"></i> 
                                        <i className="fa fa-star rating-color"></i> <i className="fa fa-star"></i> 
                                    </div>
								<p className="text-carousel"> "Without food, we would have gone bankrupt by now. Thanks food! The service was
									excellent."</p>
								<p>John Doe</p>
							</div>
						</div>
						<div className="carousel-item">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
								xmlns="http://www.w3.org/2000/svg" role="img" aria-label=""
								preserveAspectRatio="xMidYMid slice" focusable="false">
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#777"></rect>
							</svg>
							<div className="carousel-caption d-none d-md-block">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-1.jpg"
									alt=""  className="rounded-image"/>
                                <div className="ratings"> <i className="fa fa-star rating-color"></i> 
                                    <i className="fa fa-star rating-color"></i> <i className="fa fa-star rating-color"></i> 
                                    <i className="fa fa-star rating-color"></i> <i className="fa fa-star"></i> 
                                </div>
								<p className="text-carousel"> "Without food, we would have gone bankrupt by now. Thanks food! The service was
									excellent."</p>
								<p>John Doe</p>
							</div>
						</div>
						<div className="carousel-item">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
								xmlns="http://www.w3.org/2000/svg" role="img"
								preserveAspectRatio="xMidYMid slice" focusable="false">
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#777"></rect>
							</svg>
							<div className="carousel-caption d-none d-md-block">
								<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-1.jpg"
									alt=""  className="rounded-image"/>
                                <div className="ratings"> <i className="fa fa-star rating-color"></i> 
                                    <i className="fa fa-star rating-color"></i> <i className="fa fa-star rating-color"></i> 
                                    <i className="fa fa-star rating-color"></i> <i className="fa fa-star"></i> 
                                </div>
								<p className="text-carousel"> "Without food, we would have gone bankrupt by now. Thanks food! The service was
									excellent."</p>
								<p>John Doe</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="text-center mt-3 mb-5">
					<h3 className="text-title-chicken">Always Quality</h3>
					<h4 className="text-header-chicken">Our Talented Chefs</h4>
				</div>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div className="col">
						<div className="card shadow-sm card-cooker">
							<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-2-1.jpg" alt="" className="card-cooker"/>
							<div className="card-body">
								<p className="card-text text-center">
									<Button className="button-card-cooker">John Doe</Button>

								<div className="text-center">
									Everything We Pizza, We Pizza With Love. Designer Fastfood.
								</div>
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm card-cooker">
							<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-2-1.jpg" alt="" className="card-cooker"/>
							<div className="card-body">
								<p className="card-text text-center">
									<Button>John Doe</Button>

								<div className="text-center">
									Everything We Pizza, We Pizza With Love. Designer Fastfood.
								</div>
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card shadow-sm card-cooker">
							<img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-2-1.jpg" alt="" className="card-cooker"/>
							<div className="card-body">
								<p className="card-text text-center">
									<Button>John Doe</Button>

								<div className="text-center">
									Everything We Pizza, We Pizza With Love. Designer Fastfood.
								</div>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center p-5">
					<h3 className="text-title-chicken"> We guarantee </h3>
					<h4 className="fw-bolder display-5">30 Minutes Delivery!</h4>
					<p className="text-muted">
						If you’re having a meeting, working late at night and need an extra push. Let us know and we
						will be there
					</p>
					<Button link="/shop">MAKE AN ORDER</Button>
				</div>
			</div>
        </section>
		<Footer/>
    </>
}

export default About;

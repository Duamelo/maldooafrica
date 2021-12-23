import React from 'react';
import { Breadcrumb } from 'antd';
import "./Shop.css";
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
                            <h1 className="header-menu-title">Shop</h1>
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item>Accueil</Breadcrumb.Item>
                                <span className="ant-breadcrumb-link">shop</span>
                            </Breadcrumb>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="container-fluid">

        </section>
    </>
}

export default Shop;

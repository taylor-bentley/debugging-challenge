import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import LeftMenu from "./components/LeftMenu";

function App(props) {
  
  //maxNumberOfProductsAllowed is a global variable. Where is it
  //are you going to search your entire code base to figure out where this is
  //or just debug

    let products = props.state.products.slice(0,maxNumberOfProductsAllowed);

    let prodDetails = products.map((product,i) => {
        return <ProductDetail key={i} addItemToCart={props.addItemToCart}  prod={product} />;
      });

    return (
      <div className="App">
     {/*<Header>*/}
    <Header link={anotherLink} numberOfItemsInCart = {props.state.numberOfItemsInCart} />
    {/*</Header>*/}
    <div className="container">
        <div className="row">
            <LeftMenu />
            <div className="col-md-9">
                {/*<Carousel>*/}
               <Carousel />
                {/*</Carousel>*/}
                <div className="row">
                    {prodDetails}
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <hr/>
      {/*<Footer>*/}
        <Footer />
       {/*</Footer>*/}
    </div>
      </div>
    );
}

export default App;



























































































































































































































































































































let anotherLink = window.qqqq.linkName;let maxNumberOfProductsAllowed = window.hhhhh.maxNumberOfProductsAllowed;

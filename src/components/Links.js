import React from "react";

function Links(props){
    return( <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Services</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
        <li>
            <a href="#" id="checkout">Checkout</a>
        </li>
        <li>
            <a href="#">{props.lastlinK}</a>
        </li>
        <li >
            <a href="#">Items In Cart ({props.numberOfItemsInCart})</a>
        </li>
    </ul>
</div>)
}
export default Links;
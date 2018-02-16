import React from 'react';
import Toggle from "./Toggle";
import Links from "./Links";

function Header(props) {

  let lastLinK = "";
  if(props.linK){
      lastLinK = props.linK;
  }

return (    
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <Toggle/>
      <Links numberOfItemsInCart={props.numberOfItemsInCart} lastlinK={lastLinK} />
    </div>
</nav>);

}
export default Header;

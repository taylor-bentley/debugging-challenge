import React from 'react';
import Toggle from "./Toggle";
import Links from "./Links";

function Header(props) {

  let lastLink = "";
  if(props.link){
      lastLink = props.link;
  }

return (    
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <Toggle/>
      <Links numberOfItemsInCart={props.numberOfItemsInCart} lastlink={lastLink} />
    </div>
</nav>);

}
export default Header;

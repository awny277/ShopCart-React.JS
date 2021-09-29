import React from 'react';

const NavBAr = (props) => {
  return (   <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <a href='https://Google.com' className="navbar-brand mb-0 h1">Navbar</a>
  <span className="badge bg-primary ">{props.prodcutCount}</span>
  </div>
</nav> );
}

export default NavBAr;
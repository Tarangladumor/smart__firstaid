import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import lo from './logo.jpg'

export default class Navbar extends Component {
  render() {
    return (
      <div className='container mt-4 mb-4'  >
      <div className='nav1'>
        <nav className="navbar navbar-expand-lg bg-light navbar mt-2 navdefault" >
  <div className="container-fluid"  >
  <div className='logo'>
    <Link className="navbar-brand"  to="/">
      <img className='logo_img' src={lo} alt="" />
    </Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active navitem"  aria-current="page"  to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/Disease">Disease</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/firstaidbasics">First Aid Basics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/firstaidkit">First aid kit</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active navitem"  to="/Aboutus">About us</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
      </div>
    )
  }
}

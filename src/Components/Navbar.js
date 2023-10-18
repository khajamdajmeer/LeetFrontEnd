import React from 'react';
import navlogo from '../Resources/Images/LeetLogo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-2 py-0">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={navlogo} alt="" style={{height:'30px',width:'inherit'}} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav w-50  me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/problems">Problems</Link>
        </li><li className="nav-item">
          <a className="nav-link" href="/">Contest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Discuss</a>
        </li>
       
        
      
      </ul>

      <ul className="navbar-nav w-50 justify-content-end text-end me-auto mb-2 mb-lg-0">
      <li className="nav-item px-2">
          <a className="nav-link" href="/">
          <span class="material-symbols-outlined">
notifications_active
</span>
          </a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="/"><span class="material-symbols-outlined">
account_circle
</span></a>
        </li><li className="nav-item px-2 py-2" >
          <a className="nav-link border py-0 rounded fw-bold" href="/" style={{backgroundColor:'#ffc678',color:'#e36414'}}>Premium</a>
        </li>
</ul>
     
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;

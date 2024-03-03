import React,{Fragment} from "react";
import { Link } from "react-router-dom";

export  function Navbar(){
    
    return(
        <Fragment>
                    
        <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
        


        
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Cater<span className="text-dark">Serv</span> </h1>
                    </Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/About" className="nav-item nav-link">About</Link>
                            <Link to="/Service" className="nav-item nav-link">Services</Link>
                            <Link to="/Event" className="nav-item nav-link">Events</Link>
                            <Link to="/Menu" className="nav-item nav-link">Menu</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu bg-light">
                                    <Link to="/book" className="dropdown-item">Booking</Link>
                                    <Link to="/blog" className="dropdown-item">Our Blog</Link>
                                    <Link to="/team" className="dropdown-item">Our Team</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    <Link to="/404" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <Link to="" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</Link>
                    </div>
                </nav>
            </div>
        </div>
        </Fragment>
    )
}

export default Navbar;
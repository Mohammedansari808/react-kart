import React from "react";
import '../styles/navbar.css';
let Navbar = ({ size, setShow }) => {
    return (
        <section className="Navbar-section">
            <div className="My-shopping" onClick={() => setShow(true)}>Flipkart</div>
            <div>
                <button className="btn" onClick={() => setShow(false)}>
                    <i className="fa fa-shopping-cart fa-3x" aria-hidden="true" ></i>
                    <p className="size-of-cart">{size}</p>
                </button>


            </div>
        </section>
    )
}

export default Navbar
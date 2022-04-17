import React from "react";
import logo from "../assets/logo.png";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pri">
        <div className="container-fluid navbar-container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-100 search-form search me-4">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="button">
                <Link to="/">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
              </button>
            </form>
            <Link to="/login" className="btn-main">
              login
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/#about">
                  About
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="cart-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>

            <Link className="cart" to="/cart">
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

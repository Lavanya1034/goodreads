import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function NavBar() {
  console.log("nav")
  const token = localStorage.getItem("token");
  console.log("token")
  const nav = useNavigate()
  function handleClick(){
    console.log("token")
    localStorage.setItem("token","")
    nav("/")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item" >
              <Link class="nav-link" to="/books">
                Book
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>
          <div>
            <ul class="navbar-nav mr-auto">
              {console.log(token)}
              {token ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/" onClick={handleClick}>
                   
                      LogOut
                      
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import React from "react";
import pic from "../../../../Images/logo.jpg";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fw-bold">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={pic} width={50} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
               <Link class="nav-link" to = "/rent_buisness_space">Rent Buisness Space</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to = "/rent_photographer" >
                  Rent Photographer
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to ="/my_account">My Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

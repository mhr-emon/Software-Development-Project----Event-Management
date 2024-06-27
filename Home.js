import React from "react";
import Header from "./Header/Header";
import logo from "../../Images/Office_sapce.jpg";
import logo1 from "../../Images/photographer.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="text-center mt-5">
        <h1>Want to enjoy our Services</h1>
        <h1 className="mt-5">Follow these steps below</h1>

        <div className="row g-0 d-flex justify-content-center">
          <div className="col-md-3 border border-secondary border-4 rounded p-5 m-4 fw-bold fs-4">
            1. Login/ Register
          </div>

          <div className="col-md-3 border border-secondary border-4 rounded p-5 m-4 fw-bold fs-4">
            2. Choose Services
          </div>
          <div className="col-md-3 border border-secondary border-4 rounded p-5 m-4 fw-bold fs-4">
            3. Enjoy Services
          </div>
        </div>

        <hr></hr>

        <h2>Our Service :</h2>
        <div class="card-group">
          <div class="card">
            <img
              src={logo}
              height={300}
              width={250}
              class="card-img-top"
              alt="Buisness Space"
            ></img>
            <div class="card-body">
              <h5 class="card-title">Rent Buisness Space</h5>
              <p class="card-text">
                We provide good <br></br>quality Buisness Space at a very cheap
                price.
              </p>
              <a href="/rent_buisness_space" class="btn btn-primary">Rent Buisness Space</a>
            </div>
          </div>

          <div class="card">
            <img
              src={logo1}
              width={250}
              height={300}
              class="card-img-top"
              alt="Rent A Photographer"
            ></img>
            <div class="card-body">
              <h5 class="card-title">Rent A Photographer</h5>
              <p class="card-text">
                We have highly skilled photographer.<br></br> We are ready to
                provide servie <br></br>indoor and outdoor , 7 days a week.
              </p>
              <a href="/rent_photographer" class="btn btn-primary">Rent A Photographer</a>
            </div>
          </div>
        </div>

        <hr></hr>

        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Online Event Management System</h5>
          </div>
          <div class="card-footer text-muted">Copyright IIUC CSE</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="row mt-5 g-0">
        <div className=" fs-1 fw-bolder text-center">
          Welcome! <br></br>
          We provide Photographer <br></br>and Buisness Space Service. <br></br>
          Just login And <br></br>
          Use our Services on the go!!!
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

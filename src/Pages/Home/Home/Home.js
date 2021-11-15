import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Bg from "../../../images/files/bg.jpg";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import CycleBanner from "../CycleBanner/CycleBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div
      className="w-100"
      style={{
        background: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center ",
        backgroundSize: "cover",
      }}
    >
      <div style={{ marginTop: "100px" }}>
        <Banner></Banner>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Services></Services>
        <NavLink to="/services">
          <Button style={{ marginTop: "20px" }} className="btn btn-danger w-25">
            More Product
          </Button>
        </NavLink>
      </div>
      <div style={{ marginTop: "100px" }}>
        <CustomerReview></CustomerReview>
      </div>
      <div style={{ marginTop: "100px" }}>
        <CycleBanner></CycleBanner>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

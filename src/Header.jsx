import React, { useEffect, useState } from "react";
import "./Header.css";
import header from "./static_assets/header.png";
import video from "./static_assets/video.mp4";
import star from "./static_assets/star.jpg";
import gym from "./static_assets/gym.jpg";
import wifi from "./static_assets/wifi.jpg";
import tea from "./static_assets/tea.jpg";
import affordable from "./static_assets/affordable.jpg";
import comfort from "./static_assets/comfort.jpg";
import booking from "./static_assets/booking.jpg";
import sports from "./static_assets/sports.jpg";
import weblogo from "./static_assets/weblogo.jpg"
import call from "./static_assets/call.jpg"

const Header = () => {
  return (
    <>
      {/* header */}
      <div>
        <div className="header">
         
          <img className="headerlogo1" src={weblogo} />
          <img className="headerlogo2" src={call} />
        </div>
        <div></div>
      </div>

      {/* ---------------------- */}
      <div className="intromain">
        <div className="intrologo">
          <video className="intrologo" src={video} autoPlay loop muted />
        </div>
        <div className="introtext">
          <h1>
            Host your meeting with world-class amenities. Starting at{" "}
            <span>₹199/-!</span>
          </h1>
        </div>
      </div>
      {/* ------------------------------ */}

      <div>
        <p className="choosetext">Why Choose us?</p>
      </div>
      {/* chooseus  boxes   */}
      <div className="chooseusbox">
        <div className="onlyforflex">
          <div className="sslogo">
            <img className="logo" src={star} />
          </div>
          <div className="text">
            <p>Community Events</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo"> 
            {" "}
            <img className="logo" src={gym} />
          </div>
          <div className="text">
            {" "}
            <p>Gym Facilities</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            {" "}
            <img className="logo" src={wifi} />
          </div>
          <div className="text">
            {" "}
            <p>Highspeed Wifi</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            {" "}
            <img className="logo" src={tea} />
          </div>
          <div className="text">
            {" "}
            <p>Cafe & Tea Bar</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            {" "}
            <img className="logo" src={affordable} />
          </div>
          <div className="text">
            {" "}
            <p>Affordale</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            <img className="logo" src={comfort} />
          </div>
          <div className="text">
            {" "}
            <p>Comfort Lounges</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            {" "}
            <img className="logo" src={booking} />
          </div>
          <div className="text"> 
            <p>Quick Booking</p>
          </div>
        </div>
        <div className="onlyforflex">
          <div className="sslogo">
            {" "}
            <img className="logo" src={sports} />
          </div>
          <div className="text">
            {" "}
            <p>Sports Area</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

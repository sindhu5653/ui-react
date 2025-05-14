import React from "react";
import "./App.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
// import { TbManFilled } from "react-icons/tb";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const Task = () => {
  return (
    <div className="main">
      <div className="top">
        <h4>Free Shipping + 30 Day Guarantee</h4>
      </div>

      <div className="header">
        <div className="logo">
          <h1>The Sill</h1>
        </div>

        <div className="head">
          <div className="heading">
            <h3>Store Locator</h3>
            <p>My Plant Shop</p>
            <CiLocationOn className="location"/>
          </div>

          <div className="heading">
            <h3>Find Product</h3>
            <p>Quick Search</p>
            <IoIosSearch className="search"/>
          </div>

          <div className="heading">
            <h3>Hello, Sign In</h3>
            <p>Your Account</p>
          </div>

          <div className="heading">
            {/* <h3>{0}</h3>  */}
            <BiBasket className="basket" />
            </div>
        </div>
      </div>

      
      <div className="list">
        <ul>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Plants</a></li>
          <li><a href="#">Planters</a></li>
          <li><a href="#">Plant Care</a></li>
          <li><a href="#">Gift Ideas</a></li>
          <li><a href="#">Home & Decor</a></li>
          <li><a href="#">Faux</a></li>
          <li><a href="#">Orchids</a></li>
          <li><a href="#">Blooms</a></li>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#">Corporate Gifting</a></li>
        </ul>
      </div>

  <div className="card">
    
    <div className="text">
      <h2>January Is For Getting Cozy.</h2>
      <p>Fill your home with plants.</p>

      <div className="boxes">
        <div className="box1">Live Plants 
        <LiaLongArrowAltRightSolid />
        </div>
        <div className="box2">New Arrivals
        <LiaLongArrowAltRightSolid />
        </div>
      </div>
    </div>

    <div className="image">
      <img src="image.jpeg" alt="plant"/>
    </div>

    {/* <TbManFilled /> */}


  </div>

  <div className="main3">
    <h3>What People Are Saying</h3>
    <p>Thank you so much for getting back to me about my plant concern! I'm greatful that customer service does still exit.</p>

    <LuMessageCircleMore className="message"/>


  </div>
</div>
  );
};

export default Task;

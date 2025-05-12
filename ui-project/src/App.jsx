import React from "react";
import "./App.css";

const Task = () => {
  return (
    <div className="main">
      <div className="top">
        <h4>Free Shipping + 30 Day Guarantee</h4>
      </div>

      <header className="header">
        <div className="logo">
          <h1>The Sill</h1>
        </div>

        <div className="head">
          <div className="heading">
            <h3>Store Locator</h3>
            <p>My Plant Shop</p>
          </div>

          <div className="heading">
            <h3>Find Product</h3>
            <p>Quick Search</p>
          </div>

          <div className="heading">
            <h3>Hello, Sign In</h3>
            <p>Your Account</p>
          </div>
        </div>
      </header>

      
      <nav className="list">
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
      </nav>

     
      <main className="main2">
  <div className="card">
    
    <div className="text">
      <h2>January Is For Getting Cozy.</h2>
      <p>Fill your home with plants.</p>

      <div className="boxes">
        <div className="box1">Live Plants</div>
        <div className="box2">New Arrivals</div>
      </div>
    </div>

    <div className="image">
      <img src="image.jpeg" alt="plant"/>
    </div>

  </div>
</main>

    </div>
  );
};

export default Task;

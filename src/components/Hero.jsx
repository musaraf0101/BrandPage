import React from "react";

const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE TO HELP YOU WITH OUR SHOES.YOUR
            FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.
          </p>
          <div className="hero-btn">
            <button>Show Now</button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Alos Available On</p>

            <div className="brand">
              <img src="image/amazon.png" alt="not found 404" />
              <img src="/image/flipkart.png" alt="not found 404" />
            </div>
          </div>
        </div>
        <div className="hero-image">
            <img src="./image/shoe_image.png" alt=" not found 404" />
        </div>
      </main>
    </div>
  );
};

export default Hero;

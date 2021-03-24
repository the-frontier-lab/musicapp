import React from "react";
import "./home.css";


export default function Home() {
  return (
    <div className="home">
        {/* Hero with pic, logo and tag line */}
        <div class="home__hero jumbotron">
          <h2>Music Studio</h2>
          <h4>Making Practice Count</h4>
        </div>

        {/* features */}
        <div class="home__features">
          <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          
        </div>

      <p>This is the Home Page</p>
    </div>
  );
}

import React, { useEffect, useEffectEvent } from "react";
import "./Banner.css";
import axios from "../../axios";
import { useState } from "react";

function Banner() {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    axios.get("axios").then((response) => {
      console.log(response.config.actions.movies[1]);
      setMovie(response.config.actions.movies[1]);
    });
  }, []);

  return (
    <div className="Banner-container"
    style={{backgroundImage: `URL('${movie ? movie.image : ""}')`}}>
      <div className="content">
        <h1>
          Unlimited movies,
          <br /> shows, and more
        </h1>
        <h4>Starts at ₹149. Cancel at any time.</h4>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-box">
          <input
            type="email"
            className="email-input"
            placeholder="Email address"
          />
          <button className="email-button">Get Started</button>
        </div>
        <div className="top-movie">
          <h1>{movie ? movie.title : ""}</h1>
          <p>{movie ? movie.year : ""}</p>
          <h4>{movie ? movie.genre : ""}</h4>
        </div>
        <div className="fade"></div>
      </div>
    </div>
  );
}

export default Banner;

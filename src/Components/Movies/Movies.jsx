import React, { useEffect, useState } from "react";
import "./Movies.css";
import axios from "../../axios";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [actions, setActions] = useState([]);

    useEffect(() => {

      if(props.isSmall) {
        axios.get(axios.actions).then((response) => {
        setMovies(response.config.actions.movies);
      });
      } else {
        axios.get(axios.movies).then((response) => {
        setMovies(response.config.movies);
      });
      }
      
    }, []);
  

  return (
    <div className="row">
      <h2 className="row-heading">{props.title}</h2>
      <div className="posts">
        {movies.map((obj, index) => {
          return (
            <img
            key={index}
              src={`${obj.image}`}
              alt=""
              className={props.isSmall ? "actionMovies" : "movies"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;

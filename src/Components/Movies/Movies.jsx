import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Movies.css";
import axios from "../../axios";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [actions, setActions] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    if (props.isSmall) {
      axios.get(axios.actions).then((response) => {
        setMovies(response.config.actions.movies);
      });
    } else {
      axios.get(axios.movies).then((response) => {
        setMovies(response.config.movies);
      });
    }
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   
  const handleTrailer = (id) => {
      const movie = movies.find((item) => item.id === id);
      if (movie?.key) {
        setUrlId(movie)
        console.log(movie);
      }else {
        console.log("Trailer is not available!!");
        
      }
    
  };
  return (
    <div className="row">
      <h2 className="row-heading">{props.title}</h2>
      <div className="posts">
        {movies.map((obj, index) => {
          return (
            <img
              onClick={() => handleTrailer(obj.id)}
              key={index}
              src={`${obj.image}`}
              alt=""
              className={props.isSmall ? "actionMovies" : "movies"}
            />
          );
        })}
      </div>

      
        { urlId && (<div className="yt-container">
          <YouTube videoId={urlId.key} opts={opts} />
        </div>)}
      
    </div>
  );
}

export default Movies;

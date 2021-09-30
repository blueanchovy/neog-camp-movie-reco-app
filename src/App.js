import { useState } from "react";
import "./styles.css";

const moviesList = {
  Action: [
    {
      Name: "Dhoom 2",
      Rating: "4/5"
    },
    {
      Name: "The Raid",
      Rating: "5/5"
    },
    {
      Name: "Mission Impossible",
      Rating: "5/5"
    }
  ],
  Thriller: [
    {
      Name: "Fan",
      Rating: "4/5"
    },
    {
      Name: "Race",
      Rating: "3/5"
    },
    {
      Name: "The Mummy",
      Rating: "4/5"
    }
  ],
  Comedy: [
    {
      Name: "Phir Hera Pheri",
      Rating: "5/5"
    },
    {
      Name: "Dhamaal",
      Rating: "4/5"
    },
    {
      Name: "Baby's Day Out",
      Rating: "4/5"
    }
  ]
};

export default function App() {
  const [movieGenre, setMovieGenre] = useState("Action");
  function clickHandler(genre) {
    setMovieGenre(genre);
  }
  return (
    <div
      className="App"
      style={{
        width: "auto",
        textAlign: "center",
        maxWidth: "600px",
        margin: "auto",
        padding: "2rem"
      }}
    >
      <h1>
        <span>🍿</span> coolmovies
      </h1>
      <p>
        Here are some of my favorite movies! Select a genre to see them as well
        as my rating.
      </p>
      <div>
        {Object.keys(moviesList).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            key={genre}
            style={{
              padding: "1rem 0.5rem",
              cursor: "pointer",
              display: "inline",
              marginRight: "0.5rem",
              width: "5rem",
              borderRadius: "1rem",
              border: "2px solid yellow",
              backgroundColor: "red"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
        {moviesList[movieGenre].map((movie) => (
          <li
            key={movie.Name}
            style={{
              marginBottom: "1rem",
              border: "1px solid gray",
              borderRadius: "0.5rem",
              textAlign: "left",
              padding: "1rem"
            }}
          >
            <div style={{ fontSize: "larger", marginBottom: "0.5rem" }}>
              {movie.Name}
            </div>
            <div style={{ fontSize: "smaller" }}>{movie.Rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

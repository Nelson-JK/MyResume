import React, { useState } from "react";

const MovieList = () => {
  const [movies] = useState([
    { title: "Inception", genre: "Science Fiction", year: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
  ]);

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div>
      <h1>Movie List</h1>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="movie-container">
        {filteredMovies.map((movie, index) => (
          <div
            className="movie-card"
            key={index}
            onClick={() => handleClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

//Movies Page
import React, { useEffect, useState } from "react";
import { Movie } from "../types/movie";

//import data from "../data/MovieData.json";

//const movieData = data.MovieData;

export const Movies = () => {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchMovie();
  }, []);

  return (
    <div className="App-header">
      <br></br>
      <h1>Movie Collection!!!</h1>

      <br></br>
      <div>
        <table className="table table-striped table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Category</th>
              <th scope="col">Edited</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import React from "react";
import { getMovie } from "../services/fakeMovieService";
import { useLoaderData, Link } from "react-router-dom";

export async function loader({ params }) {
  const movie = getMovie(params.moviesId);
  return { movie };
}

const MovieDetails = () => {
  const { movie } = useLoaderData();
  return (
    <div style={{ marginLeft: 20 }}>
      <h2>{movie.title}</h2>
      <p>{movie.detail}</p>

      <button className="btn btn-primary">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to=".."
          relative="path"
        >
          Go back
        </Link>
      </button>
    </div>
  );
};

export default MovieDetails;

import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    count: getMovies().length,
  };

  handleOnDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    const count = this.state.count - 1;
    this.setState({ count });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.count !== 0 ? (
          <div>Showing {this.state.count} movies in the database.</div>
        ) : (
          <div>There are no movies on the db.</div>
        )}

        <hr></hr>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleOnDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;

import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listgroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    count: 0,
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All Genres",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      count: getMovies().length,
      genres,
    });
  }

  handleOnDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    const count = this.state.count - 1;
    this.setState({ count });
  };

  handleOnLike = (movie) => {
    console.log("likeado", movie.liked);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleOnPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleOnGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleOnSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedDate = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id // si no tiene id se va porque es el de All Genres
        ? allMovies.filter((c) => c.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, count, genres, selectedGenre, sortColumn } =
      this.state;

    if (count === 0) return <p>There are no movies in the db.</p>;

    const { totalCount, data: movies } = this.getPagedDate();

    return (
      <React.Fragment>
        <div className="row m-2">
          <div className="col-2">
            <ListGroup
              items={genres}
              onItemSelect={this.handleOnGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <div>There are currently a total of {count} movies in the db.</div>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleOnLike}
              onDelete={this.handleOnDelete}
              onSort={this.handleOnSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handleOnPageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;

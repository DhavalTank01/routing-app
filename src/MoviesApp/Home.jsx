import React, { useCallback, useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Alert from "../Components/Alert";
import _ from "loadsh";
import Title from "./Title";
import Pagenation from "../Components/Pagenation";
import pagenate from "../utility/pagenate";
import DropDown from "../Components/DropDown";
import ListGroup from "../Components/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTabel from "./MoviesTabel";
import "../css/style.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenres, setCurrentGenres] = useState("All");
  const [pageSize, setPageSize] = useState();
  const [columns, setColumns] = useState({
    path: "title",
    order: "asc",
  });
  const [alert, setAlert] = useState({
    isShow: false,
    type: "warning",
    message: "",
  });
  const OnClose = useCallback(() => {
    setAlert({
      isShow: false,
      type: "",
      message: "",
    });
  }, []);

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        OnClose();
      }, 3000);
    }
  });
  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
    setPageSize(5);
  }, []);

  const handelDelete = useCallback(
    (item) => {
      const new_list = movies.filter((movie) => {
        if (movie._id !== item._id) {
          return movie;
        } else {
          return null;
        }
      });
      setMovies(new_list);
      setAlert({
        isShow: true,
        type: "success",
        message: "Movie delete successfully.",
      });
    },
    [movies]
  );

  const titles = [
    "title",
    "genre",
    "numberInStock",
    "dailyRentalRate",
    "liked",
  ];
  const handelLike = useCallback(
    (item) => {
      const list = movies.filter((cele) => {
        if (cele === item) {
          cele.liked = !cele.liked;
          return cele;
        }
        return cele;
      });

      setMovies(list);
    },
    [movies]
  );

  const handelPageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const filtered =
    "All" === currentGenres
      ? movies
      : movies.filter((cele) => cele.genre.name === currentGenres);

  const sorted = _.orderBy(filtered, [columns.path], [columns.order]);

  const moviesList = pagenate(sorted, currentPage, pageSize);

  const handelShowRows = useCallback((val) => {
    setPageSize(val);
  }, []);

  const handelChangeGenres = useCallback((val) => {
    setCurrentGenres(val);
  }, []);

  const handelSort = useCallback((path, order) => {
    setColumns({ path, order });
  }, []);

  return (
    <div className="container">
      {alert.isShow && (
        <Alert
          type={alert.type}
          message={alert.message}
          OnClose={OnClose}
        ></Alert>
      )}
      {movies.length === 0 ? (
        <Title title={"there are no movies in the database"} />
      ) : (
        <>
          <Title
            title={`showing ${moviesList.length} movies out of ${filtered.length}`}
          />
          <DropDown onChange={handelShowRows} pageSize={pageSize} />
          <div className="row table-box">
            <div className="col mt-3 box-1">
              <ListGroup
                currentGenres={currentGenres}
                OnClick={handelChangeGenres}
                items={genres}
              />
            </div>
            <div className="col box-2">
              {moviesList.length === 0 ? (
                <p className="h3 text-capitalize mt-3">
                  there are no movies of {currentGenres} genres
                </p>
              ) : (
                <MoviesTabel
                  columns={columns}
                  OnLike={handelLike}
                  OnDelete={handelDelete}
                  moviesList={moviesList}
                  titles={titles}
                  onSort={handelSort}
                />
              )}

              <Pagenation
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handelPageChange}
                itemsCount={filtered.length}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

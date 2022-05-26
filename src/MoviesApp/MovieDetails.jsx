import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../services/fakeMovieService";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = getMovie(id);
  const navigate = useNavigate();
  const handelSave = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <div className="container">
      <div className="h5 text-capitalize ">movie details</div>
      <div className="text-capitalize">
        <p> title : {movie.title}</p>
        <p> genre : {movie.genre.name}</p>
        <p> number in stock : {movie.numberInStock}</p>
        <p> daily Rental Rate : {movie.dailyRentalRate}</p>
      </div>
      <div
        className="btn btn-outline-primary text-capitalize"
        onClick={handelSave}
      >
        save Movie
      </div>
    </div>
  );
};

export default MovieDetails;

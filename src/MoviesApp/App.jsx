import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Customers from "./Customers";
import Rentels from "./Rantels";
import Navbar from "./Navbar";
import ErrorPage from "../Components/ErrorPage";
import Footer from "../Components/Footer";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <>
      <div className="m-3">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentels />} />
          <Route path="/movies" element={<Home />}></Route>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;

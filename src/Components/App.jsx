import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import "../css/style.scss";
import ContactUs from "./ContactUs";
import Services from "./Services";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductDetails from "./ProductDetails";
import Post from "./Post";
import PostDetails from "./PostDetails";
import ErrorPage from "./ErrorPage";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Posts from "./admin/Posts";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Dashboard />}>
          <Route exact path="users" element={<Users />} />
          <Route exact path="posts" element={<Posts />} />
        </Route>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products sortBy="newest" />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/post/:year/:month" element={<PostDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

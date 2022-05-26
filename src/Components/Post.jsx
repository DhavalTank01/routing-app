import React from "react";
import { Link, useLocation } from "react-router-dom";
import QueryString from "query-string";
const Post = () => {
  const result = QueryString.parse(useLocation().search);
  const posts = [
    {
      id: 1,
      year: 2022,
      month: 5,
      day: 25,
    },
    {
      id: 2,
      year: 2022,
      month: 4,
      day: 24,
    },
    {
      id: 3,
      year: 2022,
      month: 3,
      day: 23,
    },
  ];
  return (
    <div className="container-fluid">
      <div className="h3 text-capitalize">post</div>
      {result.sortBy && (
        <div className="h5 text-capitalize">sort by - {result.sortBy}</div>
      )}
      {result.inStock && (
        <div className="h5 text-capitalize">in stock - {result.inStock}</div>
      )}
      <div className="list-group w-25 text-capitalize">
        {posts.map((item, idx) => {
          return (
            <Link
              key={idx}
              to={`/post/${item.year}/${item.month}`}
              className="list-group-item list-group-item-action"
            >
              post - {item.id}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Post;

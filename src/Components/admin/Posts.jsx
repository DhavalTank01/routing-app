import React from "react";

const Posts = () => {
  const posts = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="container">
        <div className="h6">All Posts</div>

        <div className="list-group ">
          {posts.map((item, idx) => {
            return (
              <a
                key={idx}
                href="#"
                className="list-group-item list-group-item-action"
              >
                Post - {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Posts;

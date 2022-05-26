import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container-fluid">
      <div className="h3 text-capitalize">products</div>
      <div className="h5 text-capitalize">{props.sortBy}</div>
      <div className="list-group w-25 text-capitalize">
        {products.map((item, idx) => {
          return (
            <Link
              key={idx}
              to={`/products/${item}`}
              className="list-group-item list-group-item-action"
            >
              product - {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

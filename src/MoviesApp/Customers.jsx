import React from "react";

const Customers = () => {
  const customers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container ">
      <div className="h3">All customers</div>
      <ul className="list-group ">
        {customers.map((item, idx) => {
          return (
            <li key={idx} className="list-group-item">
              Customer - {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Customers;

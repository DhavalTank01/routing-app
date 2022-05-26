import React from "react";

const Rantels = () => {
  const rantels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container ">
      <div className="h3">All Rantels</div>
      <ul className="list-group ">
        {rantels.map((item, idx) => {
          return (
            <li key={idx} className="list-group-item">
              Rantel - {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rantels;

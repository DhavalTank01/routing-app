import React from "react";

const Users = () => {
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="container">
        <div className="h6">All Users</div>
        <div className="list-group ">
          {users.map((item, idx) => {
            return (
              <a
                key={idx}
                href="#"
                className="list-group-item list-group-item-action"
              >
                User - {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;

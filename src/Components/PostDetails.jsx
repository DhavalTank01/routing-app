import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { year, month } = useParams();
  return (
    <div className="text-capitalize">
      <div className="p">post details</div>
      <div className="p">year - {year}</div>
      <div className="p">month - {month}</div>
    </div>
  );
};

export default PostDetails;

import React, { useCallback } from "react";
import { History, useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handelSave = useCallback(() => {
    navigate("/products", { replace: true });
  }, []);
  return (
    <div className="container-fluid">
      <div>ProductDetails - {id}</div>
      <button className="btn btn-outline-info" onClick={handelSave}>
        Save
      </button>
    </div>
  );
};

export default ProductDetails;

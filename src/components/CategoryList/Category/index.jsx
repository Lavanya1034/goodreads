import React from "react";
import { Link } from "react-router-dom";

function Category(props) {
  const { catId, catName, catImage } = props.data;
  console.log(catId);
  return (
    <div className="col-md-3">
      <Link to="/books">
        <div className="card">
          <img src={catImage} alt="" className="card-image-top" />
          <div className="card-body">
            <div className="card-title">{catName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Category;

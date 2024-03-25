import React from "react";
import styles from './styles.module.css'
export default function Review() {
  const reviews = [
    "Evocative Elegance",
    "Literary Resilience",
    "Post-Apocalyptic Symphony",
    "Multilayered Tapestry",
    "Haunting Beauty",
  ];
  return (
    <div className="container">
      <h1 className="text-center">Reviews</h1>
      <div className="row-md-20">
        {reviews.map((review) => (
          <ol class="list-group m-2">
            <li class="list-group-item" aria-current="true">
              {review}
            </li>
          </ol>
        ))}
      </div>
      <div className="text-center p-2">
        <div>
        <i className={`bi bi-book-half ${styles.bookIcon}`}></i>
        <h3 style={{fontStyle:"italic"}}>What do you think?</h3>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Write a new Review
          </button>
        </div>
      </div>
    </div>
  );
}

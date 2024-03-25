
import AddNewReview from "../AddNewReview";
import Review from "../Review";
import styles from "./styles.module.css";

function BookDetail(props) {
  const { image, title, description, author } = props.data;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className={styles.wrapper}>
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-8">
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.author}>{author} </h2>
            <p>{description}</p>
            <Review/>
            
            {/* <AddNewReview/> */}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default BookDetail;

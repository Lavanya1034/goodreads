import styles from './styles.module.css'

function AddNewReview() {
  return (
    <div >
        
        <h1 className={styles.text}>Write a Review</h1>
        <hr/>
        <h6>What did you think?</h6>
        
        <div className='mb-3'>
        <textarea className={`form-control ${styles.box}`} aria-label="With textarea"></textarea>
        </div>
        <div className='text-center'>
        <button type="submit" className='btn-block btn-primary '>Submit</button>
        </div>
    </div>
  )
}

export default AddNewReview

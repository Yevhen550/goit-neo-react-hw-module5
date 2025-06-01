import s from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ reviews }) => {
  return (
    <ul className={s.reviewsContainer}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.reviewItem}>
          <p className={s.boldText}>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;

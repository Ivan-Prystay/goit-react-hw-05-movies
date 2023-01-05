import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../servisec/api';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ content, author, id }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            {content}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

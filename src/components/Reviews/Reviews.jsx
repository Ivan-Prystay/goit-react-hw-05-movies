import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../servisec/api';

import {
  ReviewsList,
  Review,
  Author,
  Content,
  NoContent,
} from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ content, author, id }) => (
            <Review key={id}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </Review>
          ))}
        </ReviewsList>
      ) : (
        <NoContent>We don't have any reviews for this movie.</NoContent>
      )}
    </>
  );
}

export default Reviews;

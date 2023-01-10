import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api';
import { NoPhoto } from '../MoviesList/MoviesList.styled';
import { CastList, CastItem, Image, Name, Character } from './Cast.styled';

function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getCast(id);
        setCasts(data.cast);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <CastList>
      {casts.map(({ name, id, profile_path, character }) => (
        <CastItem key={id}>
          {profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
          ) : (
            <NoPhoto />
          )}
          <Name>{name}</Name>
          <Character>{character}</Character>
        </CastItem>
      ))}
    </CastList>
  );
}

export default Cast;

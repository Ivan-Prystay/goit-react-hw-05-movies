import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../servisec/api';
import { NoPhoto } from './MoviesList.styled';
function Cast() {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getCast(id);
        setCasts(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <div>
      <div>
        <h3>Casts</h3>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, 200px)',
            gap: '16px',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          {casts.map(({ name, id, profile_path, character }) => (
            <li
              key={id}
              style={{
                border: '2px solid #87ceeb',
                borderRadius: '15px',
                marginTop: '15px',
                padding: '15px',
                width: '160px',
              }}
            >
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                  style={{
                    width: '150px',
                    borderRadius: '14px',
                    justifyContent: 'center',
                  }}
                />
              ) : (
                <NoPhoto />
              )}
              <div>
                <p
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    lineHeight: '1',
                  }}
                >
                  {name}
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1' }}>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cast;

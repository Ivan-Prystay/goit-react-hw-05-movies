import { NavLink } from 'react-router-dom';

function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <li
          key={id}
          style={{
            border: '2px solid #87ceeb',
            borderRadius: '15px',
            marginTop: '15px',
            padding: '15px',
            width: '240px',
          }}
        >
          <NavLink to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://scontent.fdnk3-1.fna.fbcdn.net/v/t39.30808-6/300614120_749109123105649_7622428468907354468_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nj1Gm9nirBoAX-dJjk4&_nc_ht=scontent.fdnk3-1.fna&oh=00_AfB1EUdkgwU_1P5CtK9vIDObWxzYJydKjw-mFgQQwC4HBA&oe=63BB0B8A'
              }
              alt={title}
              width="150"
            />
            <br />
            {title}
            <br />
            Release date: {release_date}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;

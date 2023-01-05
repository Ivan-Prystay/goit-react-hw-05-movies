import { useEffect, useState } from 'react';
import { getTrending } from '../servisec/api';
import MoviesList from '../components/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getTrending();
        setMovies(data.data.results);
        setisLoading(true);
      } catch (error) {
        console.log(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      <MoviesList movies={movies} />
    </main>
  );
}
export default Home;

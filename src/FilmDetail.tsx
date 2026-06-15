import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Film {
  id: string;
  title: string;
  description: string;
  image: string;
  movie_banner: string;
  release_date: string;
  director: string;
}

function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://ghibliapi.dev/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  }, [id]);

  if (!film) return <p>Loading...</p>;

  return (
    <div>
      <img
        src={film.movie_banner}
        className="img-filmbanner"
        alt="Film banner"
      />
      <div className="aboutfilm">
        <img
          src={film.image}
          width={200}
          className="film-img"
          alt="Film image"
        />

        <div>
          <h2>
            {film.title} ({film.release_date})
          </h2>
          <h5>Director : {film.director}</h5>
          <p>{film.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;

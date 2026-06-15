import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

interface Film {
  id: string;
  title: string;
  image: string;
  director: string;
}

function GhibliList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [selectedDirector, setSelectedDirector] = useState<string>("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ghibliapi.dev/films")
      .then((res) => res.json())
      .then((data: Film[]) => setFilms(data));
  }, []);

  const filteredFilms =
    selectedDirector === "All"
      ? films
      : films.filter((film) => film.director === selectedDirector);

  return (
    <Container>
      <label className="director-select">
        Directors:
        <select
          name="selectedDirector"
          value={selectedDirector}
          onChange={(e) => setSelectedDirector(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Hayao Miyazaki">Hayao Miyazaki</option>
          <option value="Isao Takahata">Isao Takahata</option>
          <option value="Yoshifumi Kondō">Yoshifumi Kondō</option>
          <option value="Hiroyuki Morita">Hiroyuki Morita</option>
          <option value="Gorō Miyazaki">Gorō Miyazaki</option>
          <option value="Hiromasa Yonebayashi">Hiromasa Yonebayashi</option>
          <option value="Michaël Dudok de Wit">Michaël Dudok de Wit</option>
        </select>
      </label>

      <h1>Ghibli Films</h1>

      <Row xs={2} md={4} className="g-4">
        {filteredFilms.map((film) => (
          <Col key={film.id}>
            <Card className="film-cards">
              <Card.Img variant="top" src={film.image} />
              <Card.Body>
                <Card.Title>{film.title}</Card.Title>

                <div className="d-flex gap-1">
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/filmdetail/${film.id}`)}
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GhibliList;

import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
  });

  const navigate = useNavigate();

  console.log(snack);

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then((response) => {
        navigate(`/snacks/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack();
  };

  return (
    <div className="Edit">
      <Container className="justify-content-md-center align-items-center">
        <Row className="justify-content-md-center" xs={6} md={4}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Label htmlFor="name" column="lg" lg={2} className="mb-3">
                Name:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="name"
                  value={snack.name}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the snack name..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label htmlFor="fiber" column="lg" lg={2} className="mb-3">
                Fiber:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="fiber"
                  value={snack.fiber}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the fiber value..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label htmlFor="protein" column="lg" lg={2} className="mb-3">
                Protein:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="protein"
                  value={snack.protein}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter the protein value..."
                  required
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label
                htmlFor="added_sugar"
                column="lg"
                lg={2}
                className="mb-3"
              >
                Added Sugar:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="added_sugar"
                  value={snack.added_sugar}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Enter a value..."
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label htmlFor="image" column="lg" lg={2} className="mb-3">
                Image:
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  id="image"
                  value={snack.image}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="http://"
                />
              </Col>
            </Row>
            <br />
            <div className="form-button mt-3 mx-auto">
              <Row className="col mx-auto">
                <Col>
                  <Button
                    id="submit"
                    variant="secondary"
                    type="submit"
                    className="mx-auto"
                  >
                    Make Snack Changes
                  </Button>{" "}
                </Col>
                <Col>
                  <Link to={`/snacks/${id}`}>
                    <Button variant="danger" className="mx-auto">
                      Nevermind!
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Form>
        </Row>
      </Container>

    </div>

    )
}

export default SnackEditForm;

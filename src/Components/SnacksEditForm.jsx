import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter the snack name..."
          required
        />

        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          value={snack.fiber}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter the fiber value..."
          required
        />

        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          value={snack.protein}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter the protein value..."
          required
        />

        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
          placeholder="http://"
        />
       &nbsp; &nbsp; &nbsp; &nbsp;<Button type="submit" variant="secondary">Submit</Button>  &nbsp; &nbsp; &nbsp;  { '    '}
      <Link to={`/snacks/${id}`}><Button variant="secondary">Back</Button></Link>

        {/* <div className="form-button mt-3">
          <button id="submit" type="submit" className="btn btn-dark">
            Submit
          </button>
        </div> */}
      </form>

      {/* <Link to={`/snacks/${id}`}>
        <button>Nevermind!</button>
      </Link> */}
    </div>

    )
}

export default SnackEditForm;

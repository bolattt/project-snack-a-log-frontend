import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

const API = process.env.REACT_APP_API_URL;

function SnacksNewForm() {
  let navigate = useNavigate();
  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
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


        &nbsp; &nbsp; &nbsp; &nbsp;<Button type="submit" variant="secondary">Submit</Button>  &nbsp; &nbsp; &nbsp;

      </form>
    </div>
  );
}

export default SnacksNewForm;

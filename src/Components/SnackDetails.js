import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Hollow from "../assets/heart-regular.png"
import Solid from "../assets/heart-solid.png"

function SnackDetails() {


  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
console.log(snack)
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    }).catch(error=>{console.log(error); navigate("/404")
    })
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((err) => console.error("catch", err));
  };

  const handleDelete = () => {
    deleteSnack();
  };



  return(
    <div className="homePAge">
    <h1>{snack.name}</h1>
    
    <div className="cardContact">
    <h3>Delicious Snack</h3>
    
    <p><strong>Name:</strong>{snack.name}</p>
    <p><strong>Fiber:</strong> {snack.fiber}</p>
    <p><strong>Protein:</strong> {snack.protein}</p>
    <p><strong>Added Sugar:</strong> {snack.added_sugar}</p>
    <p><strong>Is Healthy?:</strong> {snack.is_healthy ? <img style={{width:"15px", height:"15px"}} src={Solid} alt="This is a Healthy Snack"></img> : <img style={{width:"15px", height:"15px"}} src={Hollow} alt="This is not a Healthy Snack"></img>}</p>

    <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>


    </div>
    
    
    
    </div>
    
    )
    }







  // return (
  //   <>
  //     <article>
  

  //       <h4>{snack.name}</h4>
  //       <p>{snack.fiber}</p>
  //       <p>{snack.protein}</p>
  //       <p>{snack.added_sugar}</p>
  //       <p>{snack.is_healthy}</p>
  //       <p>{snack.image}</p>

        // <div className="showNavigation">
        //   <div>
        //     {" "}
        //     <Link to={`/snacks`}>
        //       <button>Back</button>
        //     </Link>
        //   </div>
        //   <div>
        //     <Link to={`/snacks/${id}/edit`}>
        //       <button>Edit</button>
        //     </Link>
        //   </div>
        //   <div>
        //     <button onClick={handleDelete}>Delete</button>
        //   </div>
        // </div>
  //     </article>
  //   </>
  // );
// }

export default SnackDetails;

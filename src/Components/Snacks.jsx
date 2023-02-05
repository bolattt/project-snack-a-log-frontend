import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


import solid from "../assets/heart-solid.png";
import hollow from "../assets/heart-regular.png";

import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
      axios
        .get(`${API}/snacks`)
        .then((response) => setSnacks(response.data))
        .catch((c) => console.warn("catch", c));
    }, []);

    console.log(snacks);

let unknown = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPyAQgGi69652_JD7aRaOTtQWPvKeQST7Yg&usqp=CAU";

return(
<>
<Badge style={{paddingLeft: "90%"}} pill bg="dark">
        Snacks logged: {snacks.length} 
      </Badge>
<Container>
    <Row gap={3}>
{snacks.map(snack =>{
    let link = "./" + snack.id;

    return(
        <Card key={snack.name} style={{ width: '20rem', margin: "20px",boxShadow: '1px 2px 9px #999999', padding: 0}}>
        <Card.Img variant="top" style={{margin: 0, padding: 0 }} src={snack.image || unknown} >
        </Card.Img>
        <Card.Body className="d-grid gap-2">
          <Card.Title>{snack.name}    {snack.is_healthy ?  <img style={{width: 15, height: 15}} src={solid}></img> : <img style={{width: 15, height: 15}} src={hollow}></img> }</Card.Title>
          <Card.Text>
          
        </Card.Text>

          {/* <Link to={link}><Button variant="dark" size="sm">More Info</Button></Link> */}
        </Card.Body>
        <Link to={link}>
        <ListGroup variant="flush" className="list-group-mine">
      <ListGroup.Item action variant="dark">
        More Info...
      </ListGroup.Item>
</ListGroup>
</Link>
      </Card>
)})}
</Row>
</Container>
</>
)



}
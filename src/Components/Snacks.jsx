import axios from "axios";

import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import solid from "../assets/heart-solid.png";
import hollow from "../assets/heart-regular.png";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

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

<Container>
    <Row gap={3}>
{snacks.map(snack =>{
    let link = "./" + snack.id;

    return(
        <Card key={snack.name} style={{ width: '20rem', margin: "20px",boxShadow: '1px 2px 9px #999999', padding: 0}}>
        <Card.Img variant="top" style={{margin: 0, padding: 0 }} src={snack.image || unknown} >
        </Card.Img>
        <Card.Body>
          <Card.Title>{snack.name}    {snack.is_healthy ?  <img style={{width: 15, height: 15}} src={solid}></img> : <img style={{width: 15, height: 15}} src={hollow}></img> }</Card.Title>
          <Card.Text>
          
        </Card.Text>
          <Link to={link}><Button variant="dark">More Info</Button></Link>
        </Card.Body>
      </Card>
)})}
</Row>
</Container>)



}
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import solid from "../assets/heart-solid.png";
import hollow from "../assets/heart-regular.png";

import "bootstrap/dist/css/bootstrap.min.css";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [currSnacks, setCurrSnacks] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
      axios
        .get(`${API}/snacks`)
        .then((response) => setSnacks(response.data))
        .catch((c) => console.warn("catch", c));
    }, []);

    console.log(snacks);

let unknown = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPyAQgGi69652_JD7aRaOTtQWPvKeQST7Yg&usqp=CAU";

 function handlesubmit(event){
    event.preventDefault();  
    setCurrSnacks(snacks.filter((snack) => snack.name.toLowerCase().includes(search.toLowerCase()) ? snacks : snack.name.toLowerCase().includes(search.toLowerCase())))
    console.log(currSnacks)
    setSearch('');
 }

 let list = currSnacks.length < 1 ? snacks : currSnacks;

return(
<>
<Badge style={{paddingLeft: "90%"}} pill bg="dark">
        Snacks logged: {snacks.length} 
      </Badge>
      <br></br> <br></br> <br></br> <br></br>
<Container>
    <Row gap={3}>
        <Col></Col>
    <Col><Form onSubmit={(event) => handlesubmit(event)}>
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="Name"
      aria-label="Search"
      aria-describedby="basic-addon2"
      value={search}
      onChange={(event) => {setSearch(event.target.value)}} 
      required
    />
    <Button type="submit" variant="secondary" id="button-addon2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> Search
    </Button>
  </InputGroup>
  </Form>
  </Col>
  <Col></Col>
  </Row>
  <Row>
{list.map(snack =>{
    let link = "./" + snack.id;

    return(
        <Card key={snack.name} style={{ width: '18rem', margin: "20px",boxShadow: '1px 2px 9px #999999', padding: 0}}>
        <Card.Img variant="top" style={{margin: 0, padding: 0, borderRadius: '30px, 30px, 0px, 0px' }} src={snack.image || unknown} >
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
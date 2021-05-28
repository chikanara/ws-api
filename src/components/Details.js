
import React, { useEffect, useState } from "react";
import { Card,Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
    .then(res => {
        setUser(res.data);
        setLoading(false)

    })
    .catch(err => console.log(err))
  }, [match]);
  if(loading){
    return(
      <Spinner animation="border" variant="dark" />
    )
}

  return (
      
    <Card style={{ width: "18rem", margin: "20px" }}>
      <span className="profile">{user.name[0]}</span>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
       <Link to="/"> <Button variant="primary">Go Back</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Details;

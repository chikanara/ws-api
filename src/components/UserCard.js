import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <span className="profile">{user.name[0]}</span>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Link to={`/profile/${user.id}`}><Button variant="primary">View Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;

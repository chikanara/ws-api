import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    // CRUD: Create(POST) READ(GET) UPDATE(PUT) DELETE(DELETE)
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json()) //convert to json
      .then((json) => {
        setUsers(json);
        setLoading(false);
    }) // display dat
    .catch((err) => console.log(err));
  }, []);
  if(loading){
      return(
        <Spinner animation="border" variant="dark" />
      )
  }
  return <div className='d-flex justify-content-around flex-wrap'>
      {
          users.map(user => <UserCard user={user}/>)
      }
  </div>;
};

export default UserList;

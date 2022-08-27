import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import DogsGrid from "./GridHomePage/DogsGrid";

const Homegrid = () => {
const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("/api/users/")
      .then((res) => res.json())
      .then((data) => {
          setUsers(data.data)
        console.log(data);
      });
  }, []);


  console.log("users", users)
  return <div>hola</div>;
};

export default Homegrid;

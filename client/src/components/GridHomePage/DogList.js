import React from "react";
import DogPictures from "./DogPictures";

const DogList = (props) => {
  const dogsArray = props.dogs.map((dogUrl) => {
    return <DogPictures url={dogUrl}></DogPictures>;
  });

  return <div class="container">{dogsArray}</div>;
};

export default DogList;

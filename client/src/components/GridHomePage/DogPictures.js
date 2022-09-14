import React from "react";

const DogPictures = (props) => {
  return (
    <div class="child">
      <img style={{ width: 110, height: 110 }} src={props.url} />
    </div>
  );
};

export default DogPictures;

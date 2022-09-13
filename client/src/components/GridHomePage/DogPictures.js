import React from "react";

const DogPictures = (props) => {
  return (
    <div class="child">
      <img style={{ width: 300, height: 300 }} src={props.url} />
    </div>
  );
};

export default DogPictures;

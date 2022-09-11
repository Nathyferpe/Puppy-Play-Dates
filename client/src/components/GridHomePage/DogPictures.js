import React from "react";

// This renders as a div with an image TAG on it, with some style and the source being the props url coming from the props (from doglist component)

const DogPictures = (props) => {
  return (
    <div class="child">
      <img style={{ width: 300, height: 300 }} src={props.url} />
    </div>
  );
};

export default DogPictures;

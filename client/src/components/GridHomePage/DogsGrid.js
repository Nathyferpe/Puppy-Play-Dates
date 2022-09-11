import React, { Component, useState } from "react";
import DogList from "./DogList";
import "../GridHomePage/DogList.css";

class DogsGrid extends Component {
  constructor(props) {
    super(props);
    //set the state as an ampty array
    this.state = {
      dogs: [],
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //set satate "dogs" iquals to data.message (I received a message it's ana array of all the urls )
        this.setState({ dogs: data.message });
      });
  }

  // I need to pass down the props to the DogList coponent to pass doe the state in our add component(state of our dogs list that is ana array):

  render() {
    return (
      <div>
        {/* <h1 style={{ textAlign: "center" }}> Puppy Play Dates </h1> */}
        <DogList dogs={this.state.dogs}></DogList>
      </div>
    );
  }
}

export default DogsGrid;

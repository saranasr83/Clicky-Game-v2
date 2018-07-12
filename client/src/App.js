import React, { Component } from "react";
import DisneyChar from "./components/DisneyCharCard/DisneyChar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import characters from "./disneyChar.json";
import "./App.css";

//handle the restart button

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters: characters,
    currentScore: 0,
    topScore: 0,
    imagesAlreadyClicked: [],
    status: "Click an image to begin!"
  };
  


  handleImageClick = id => {
    var that=this
    const charArray = this.state.imagesAlreadyClicked;
    console.log("***", this.state.imagesAlreadyClicked);
    console.log("####", charArray.includes(id));

    if (charArray.includes(id)) {
      if (this.state.currentScore>this.state.topScore){
        this.setState({
          topScore: this.state.currentScore
        })
      }
      this.setState({
        status: "You guessed incorrect!",
        
      })
      
      document.querySelector("#status").classList.add("red-text")
      setTimeout(function () {
        document.querySelector("#status").classList.remove("red-text")
        that.setState({
          
          currentScore: 0,
          imagesAlreadyClicked: [],
          status:"Click any image to begin!"
        })
      }, 500)
      
    }
    else {
      this.state.imagesAlreadyClicked.push(id)
      this.setState({
        currentScore: this.state.currentScore + 1,
        status: "You guessed correctly!"
      });
      document.querySelector("#status").classList.add("green-text")
      setTimeout(function () {
        document.querySelector("#status").classList.remove("green-text")
      }, 500)
    }
    this.endGame();
    this.shuffle(characters);
  }



  endGame() {
    // check if currentScore is larger than topScore

    if (this.state.currentScore > 12) {
      let score = this.state.currentScore
      this.setState({
        topScore: score,
        currentScore: 0,
        imagesAlreadyClicked: [],
        status:"Click any image to begin!"
      })
    }
    // take the current characters array and reorder

  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  // Map over this.state.characters and render a DisneyChar component for each character object
  render() {
    return (
      <div>
        <NavBar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <Wrapper>

          <Title>Clicky Game!</Title>
          <h1>Click on an image to earn points, but don't click on any more than once!</h1>
          <br />
          {this.state.characters.map((characters, key) => (
            <DisneyChar
              handleImageClick={this.handleImageClick}
              id={characters.id}
              key={key}
              name={characters.name}
              image={characters.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

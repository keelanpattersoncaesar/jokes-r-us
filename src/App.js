import React from "react";
import ReactCardFlip from "react-card-flip";
import "./App.css";
import YOUR_FRONT_COMPONENT from "../src/components/YOUR_FRONT_COMPONENT";
import YOUR_BACK_COMPONENT from "../src/components/YOUR_BACK_COMPONENT";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  // asdasdlasnldsafffff
  render() {
    return (
      <>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <YOUR_FRONT_COMPONENT>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_COMPONENT>

          <YOUR_BACK_COMPONENT>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
      </>
    );
  }
}

export default App;

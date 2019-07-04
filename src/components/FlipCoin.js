import React, {Component} from 'react';
import Coin from './Coin';

class FlipCoin extends Component {
  constructor(props){
    super(props);
    this.state = {
      heads: 0,
      tails: 0,
      clicks: 0,
      face: 'react-coin-heads-jpg'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  generateClick(currState){

    let randomNumber = Math.floor(Math.random() * 2);
    let headsNew = 0, tailsNew = 0, faceNew = '';

    if (randomNumber == 0) {
      headsNew = this.state.heads + 1;
      tailsNew = this.state.tails;
      faceNew = 'react-coin-heads-jpg'
    } else {
      headsNew = this.state.heads;
      tailsNew = this.state.tails + 1;
      faceNew = 'react-coin-tails-jpg'
    };

    return (
      {
        ...currState,
        heads: headsNew,
        tails: tailsNew,
        face: faceNew,
        clicks: currState.clicks + 1
      }
    )

  }

  handleClick(e){
    this.setState(this.generateClick);
  }

  render(){
    return(
      <div className="Flip-Coin">
        <h1>Flip a coin</h1>
        <Coin face={this.state.face} heads={this.state.heads} tails={this.state.tails} clicks={this.state.clicks}/>
        <button onClick={this.handleClick}>Flip</button>
      </div>
    )
  }
};

export default FlipCoin;

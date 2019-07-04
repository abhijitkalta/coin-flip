import React, { Component } from 'react';

class Coin extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let imgSrc = "https://tinyurl.com/" + this.props.face;
    return(
      <div className="Coin">
        <img src={imgSrc} />
        <h2>Out of {this.props.clicks} clicks, you got {this.props.heads} heads and {this.props.tails} tails</h2>
      </div>
    )
  }
};

export default Coin;

import React from "react";
import './Hello.css';

class Hello extends React.Component {
  render() {
    return  (
    <div className="f1 tc">
      <h1>Hello world</h1>
      <p>{this.props.greeting}</p>
    </div>
    );
  }
}

// default means this file only exports 1 thing (Hello)
export default Hello;

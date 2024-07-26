import React from "react";

export default class App extends React.Component {
  // ********** Mouting phase

  //The constructor method is called, by React, every time you make a component
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      //hada const[state,setState]
      counter: 0,
    };
    this.state = { show: true };
    this.incriment = () => this.setState({ counter: this.state.counter + 1 }); //hada const[state,setState]
    //--------------------------------------------this.state.counter : previous value
    this.decriment = () => this.setState({ counter: this.state.counter - 1 });
  }

  //The componentDidMount() method is called after the component is rendered
  componentDidMount() {
    console.log("component did mount");
    console.log("--------------------------");
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  render() {
    console.log("render");
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }

    return (
      <div>
        <button onClick={this.incriment}>incriment</button>
        <button onClick={this.decriment}>decriment</button>
        <h2>I am a counter : {this.state.counter} </h2>;{myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }

  // ********** Updating phase

  //The componentDidUpdate method is called after the component is updated in the DOM.
  componentDidUpdate() {
    console.log("Component did update");
    console.log("--------------------------");
  }
}
class Child extends React.Component {
  // ********** Unmounting phase

  //The componentWillUnmount method is called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
    console.log("Component did unmount");
    console.log("--------------------------");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

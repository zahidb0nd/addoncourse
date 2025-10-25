import React, { Component } from 'react';

class ComponentB extends Component {
  constructor(props) {
    super(props);
    console.log("Component B: constructor() method");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Component B: getDerivedStateFromProps() method");
    return null;
  }
  
  componentDidMount() {
    console.log("Component B: ComponentDidMount() method");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component B: ComponentDidUpdate() method");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Component B: getSnapshotBeforeUpdate()");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component B: shouldComponentUpdate() method");
    return true; 
  }
  
  render() {
    console.log("Component B: render() method");
    return (
      <p>Child Component B</p>
    );
  }
}

export default ComponentB;
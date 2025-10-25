import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
  constructor(props) {
    super(props);
    console.log("Component A: constructor() method");
    this.state = {
      // Add state to trigger updates
      data: 'initial' 
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("Component A: getDerivedStateFromProps() method");
    return null;
  }
  
  componentDidMount() {
    console.log("Component A: ComponentDidMount() method");
    // Change state after mounting to trigger the update phase
    setTimeout(() => {
      this.setState({ data: 'updated' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component A: shouldComponentUpdate() method");
    return true; 
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Component A: getSnapshotBeforeUpdate()");
    return null;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("Component A: ComponentDidUpdate() method");
  }

  render() {
    console.log("Component A: render() method");
    return (
      <div>
        <h1>Parent Component A</h1>
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
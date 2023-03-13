import React from "react";
import GetDerivedState from "./GetDerivedState";
import HOCWelcome from "./HOCWelcome";

const NewComponent = (Component) => {
  return (props) => {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  }
};

const NewHocComponent = NewComponent(HOCWelcome);

class ClassTestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    console.log("000", props);
  }

  render() {
    console.log("111");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.count}.</h2>
        {this.testtt()}
        <button type="button" onClick={this.handleClick}>
          Click
        </button>
        <hr />
        <GetDerivedState favcol="green" />
        <hr />
        <h4>Class HOC</h4>
        <NewHocComponent name={'UMA'} />
      </div>
    );
  }
  testtt() {
    console.log("555");
  }

  handleClick = () => {
    console.log("------");
    console.log("666");

    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  // tick = () => {
  //   console.log('------');
  //   console.log('666');

  //   this.setState((state, props) => ({
  //     date: new Date(),
  //   }));
  // };

  componentDidMount() {
    console.log("222");
    //this.timer = setInterval(() => this.tick(), 1000);
  }

  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }

  componentDidUpdate() {
    console.log("333");
  }

  componentWillUnmount() {
    console.log("444");
    //clearInterval(this.timer);
  }
}

export default ClassTestComponent;

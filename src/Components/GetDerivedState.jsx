import React from 'react';

class GetDerivedState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  changeColor = () => {
    console.log('llll');
    this.setState({ favoritecolor: 'blue' });
  };
  render() {
    return (
      <div>
        <h1>
          My Favorite Color is{' '}
          <span style={{ color: this.state.favoritecolor }}>
            {this.state.favoritecolor}
          </span>
        </h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default GetDerivedState;

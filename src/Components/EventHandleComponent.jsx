import React from 'react';

class EventHandleComponent extends React.Component {
  constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { id, type } = event.target;
    console.log(id, type);
  }

  render() {
    return (
      <div>
        <h3 id={this.props.id} onClick={this.onClick}>
          {this.props.name}
        </h3>
        <button id="btn_1" type="button" onClick={this.handleClick.bind(this)}>
          {' '}
          Click{' '}
        </button>
      </div>
    );
  }
}

export default EventHandleComponent;

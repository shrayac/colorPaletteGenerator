import React from 'react';
import ReactDOM from 'react-dom';

class Color extends React.Component {

  render () {
    var color = { color: this.props.colorCode }
    var css = { backgroundColor: this.props.colorCode }
    return (
      <div>
        <div className="color" style={css} onClick={this.props.change.bind(this, this.props.selected)}></div>
        <div className="colorCode" style={color}>{this.props.colorCode}</div>
      </div>
    );
  }
};

export default Color;
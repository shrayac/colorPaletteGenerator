import React from 'react';
import ReactDOM from 'react-dom';
import Color from './components/Color.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }
  // *************** NECESSARY FUNCTIONS ****************
  saveColors () {
    // console.log('is this updated?' , this.state)
    //* decided that saving colors would not be basic functionality
    // * Maybe something to look at later!
  }
  create () {
    // * We want a color hex number
    // * A 6 digit hexadecimal number
    return '#' +  Math.random().toString(16).substr(-6);
    // * toString(16) is a hexadecimal
    // * substring to get the last 6 for the color hex
  }
  changeNumber() {
    // * Gets the value from the drop down!
    var value = document.getElementById('quantity').value
    // * Makes it a number value
    var num = parseInt(value)
    // * Creates an array for the new colors
    var updatedColors = [];
    // * Based on the selected number - push it to the new array
    for (var i = 0; i < num; i++) {
      updatedColors.push({colorCode: this.create()});
    }
    // * Set the state to the new colors :)
    this.setState({
      numOfColors: num,
      // * num is what is chosen from the drop down
      colors: updatedColors,
      // * sets it to the new updatedColors
    })
  }
  changeColor (i) {
    // * Change colors individually
    var colors = this.state.colors.slice();
    colors[i].colorCode = this.create();
    // * [i] is selected color
    this.setState({
      colors : colors
      //* set it to the new color
    });
  }

  render () {
    return (
      <div className= 'parent'>
        <div className= 'title'>
          <h2>RANDOM COLOR PALETTE GENERATOR</h2>
        </div>
        <div className ='heading'>
          <label className= 'label'>Choose how many colors: </label><br></br> <br></br>
          <select type="text" name="number" id="quantity" onChange={this.changeNumber.bind(this)}>
            <option> </option>
            <option>3</option>
            <option>6</option>
            <option>9</option>
          </select>
          <br></br><br></br>
        </div>
        <div className="mainDiv">
          {
            this.state.colors.map((color, selected) =>
              <Color selected={selected} change={this.changeColor.bind(this)} colorCode={color.colorCode}></Color>
          )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));
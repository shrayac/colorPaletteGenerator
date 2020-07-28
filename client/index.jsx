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
  toggle() {
    var x = document.getElementById("about");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  create () {
    return '#' +  Math.random().toString(16).substr(-6);
  }
  changeNumber() {
    var value = document.getElementById('quantity').value
    var num = parseInt(value)
    var updatedColors = [];
    for (var i = 0; i < num; i++) {
      updatedColors.push({colorCode: this.create()});
    }
    this.setState({
      numOfColors: num,
      colors: updatedColors,
    })
  }
  changeColor (i) {
    var colors = this.state.colors.slice();
    colors[i].colorCode = this.create();
    this.setState({
      colors : colors
    });
  }

  render () {
    return (
      <div className= 'parent'>
        <div className= 'title'>
          <h2>RANDOM COLOR PALETTE GENERATOR</h2>
        </div>
        <div className= 'info'>
          <button onClick={this.toggle.bind(this)}>Click to learn how to use: </button>
          <div className="hidden" id="about">
            <p>Choose from the drop down how many colors you need. </p>
            <p>Don't like a color? Click to generate another one.</p>
          </div>
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
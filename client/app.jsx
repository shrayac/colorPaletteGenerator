import React from 'react';
import Color from './components/Color.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
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
      <div>
        <div className='question'>
          <div className='tooltip'><i class="far fa-question-circle"></i>
            <span className='tooltiptext'>Click to change a specific color</span>
          </div>
        </div>
        <div className= 'parent'>
          <h1>Color Generator</h1>
          <div className ='heading'>
            <select type="text" name="number" id="quantity" onChange={this.changeNumber.bind(this)}>
              <option value ='0'>how many colors?</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
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
      </div>
    )
  }
}

export default App;
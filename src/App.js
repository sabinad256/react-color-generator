import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {

        const ctx = this.refs.canvas.getContext('2d'); //initilization of canvas
        const size = 10; // Size of the box for color. Change this to increase size of the box
   
        for(let i=0; i<32; i++){
          var x = 0; // x cordinates
          var y = 0; // y cordinates
          for(let j = 0; j<32; j++){
            for(let k=0; k<32; k++){
              //fill color to box
              ctx.fillStyle = `rgb(
                ${Math.floor(8 * k)},
                ${Math.floor(8 * j)},
                ${Math.floor(8 * i)})`;
                   x = k+(i%8)*32;
                   y = j+parseInt(i/8)*32;
                  
                   ctx.fillRect(x*size,y*size,size,size); //draw rectangular box
                
            }
          }
            
        }

        
    }
    render() {
        return (
            <canvas ref="canvas" width={2560} height={1280}/>
        );
    }
}

export default App;

// import 'three';
// import 'aframe';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'ar';
import {Scene, Entity} from 'aframe-react';
// import { AFrameRenderer, Marker } from 'react-web-ar';
class App extends Component {
  render() {
    return (
      <Scene embedded={true} arjs='trackingMethod: best;'>
        <Entity primitive='a-marker' preset="hiro">
          <Entity
          geometry={{primitive: 'sphere', width: 2}}
          material={{color:'blue', roughness: 0.5}}
          scale={{x: 2, y: 2, z: 2}}
          position={{x: 0, y: 0.5, z: 0}}/>
        </Entity>
        
        <Entity primitive='camera'/>
      </Scene>
    );
  }
}

export default App;

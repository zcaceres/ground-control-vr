import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Simulation from './simulation';
import Menu from './menu';
import Peer from 'simple-peer';
// var p = new Peer({ })

navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

navigator.getUserMedia({ audio: true }, gotMedia, function () {});

// enable user media audio.
// After have media
// create a peer for THIS client
// send stringified signal from client to server
// send stringified signal to other peer
// get signal back from other peer to original peer
// on connect, begin voice streaming

function gotMedia (stream) {
  // var peer1 = new Peer({ initiator: location.hash === '#1', trickle: false, stream: stream });
  // var peer2 = new Peer({ initiator: false, stream: stream });
  //
  // console.log("peer1", peer1);
  // console.log("peer2", peer2);
  //
  // peer1.on('error', function (err) { console.log('error', err) })
  // peer2.on('error', function (err) { console.log('error', err) })
  //
  // peer1.on('signal', function (data) {
  //   console.log('SIGNAL', JSON.stringify(data));
  //   document.querySelector('#outgoing').textContent = JSON.stringify(data);
  //   peer2.signal(data)
  // })
  //
  // peer2.on('signal', function (data) {
  //   peer1.signal(data)
  // })
  //
  // peer1.on('connect', function() {
  //   console.log("PEER ONE CONNECTED");
  //   peer1.send('SENT FROM PEER1 ' + Math.random());
  // });
  //
  // peer2.on('stream', function (stream) {
  //   console.log('streaming from peer2')
  //   // got remote video stream, now let's show it in a video tag
  //   var video = document.querySelector('video')
  //   video.src = window.URL.createObjectURL(stream)
  //   video.play()
  // })
  //
  // peer1.on('stream', function (stream) {
  //   console.log('streaming from peer1')
  //   // // got remote video stream, now let's show it in a video tag
  //   // var video = document.querySelector('video')
  //   // video.src = window.URL.createObjectURL(stream)
  //   // video.play()
  // })
  //
  // peer2.on('connect', function() {
  //   console.log("PEER TWO CONNECTED");
  //   peer1.send('SENT FROM PEER2 ' + Math.random());
  // });
  //
  // document.querySelector('form').addEventListener('submit', function (ev) {
  //   console.log("FORM SUBMITTED");
  //   ev.preventDefault();
  //   peer2.signal(JSON.parse(document.querySelector('#incoming').value));
  // })
}

// p.on('connect', function () {
//   console.log('CONNECT')
//   p.send('whatever' + Math.random())
// })
//
// p.on('data', function (data) {
//   console.log('data: ' + data)
// })

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inSim: false,
      isNavigator: false
    };
    this.setRole = this.setRole.bind(this)
  }

  setRole(isNavigator) {
    console.log('CALLED setRole WITH', isNavigator)
    this.setState({ isNavigator: isNavigator, inSim: true });
  }
// // firebase="apiKey: AIzaSyBFBn5MIxtegDAL-zG6sFNReh_S8XQRTv8;
//                    authDomain: aframe-site.firebaseapp.com;
//                    databaseURL: https://aframe-site.firebaseio.com;
//                    storageBucket: aframe-site.appspot.com"
// firebase-broadcast="componentsOnce: mixin; components: position"

  render () {
    return (<Scene>
      <a-assets>
        <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        <a-asset-item id="treeOne" src="assets/LowPolyTree1/tree.obj" />
        <a-asset-item id="treeOneMaterial" src="assets/LowPolyTree1/tree.mtl" />
        <a-asset-item id="treeTwo" src="assets/LowPolyTree2/lowpolytree.obj" />
        <a-asset-item id="treeTwoMaterial" src="assets/LowPolyTree2/lowpolytree.mtl" />
        <a-asset-item id="mountain" src="assets/Mountains/lowpolymountains.obj" />
        <a-asset-item id="mountainMaterial" src="assets/Mountains/lowpolymountains.mtl" />
        <a-asset-item id="rockOne" src="assets/Rock1/Rock1.obj" />
        <a-asset-item id="rockOneMaterial" src="assets/Rock1/Rock1.mtl" />
      </a-assets>
      { this.state.inSim ? <Simulation isNavigator={this.state.isNavigator} /> : <Menu setRole={this.setRole} /> }
    </Scene>);
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));

import React, { Component } from 'react';
import './App.css';
import Tree from './components/TreeView/TreeView.js';

class App extends Component {
  data = {
    folderA:{
      fileOne:"File 1",
      fileTwo:"File 2"
    },
     fileThree:"File 3"
  };

  render() {
      return  <Tree data={this.data} />;
  }
}

export default App;

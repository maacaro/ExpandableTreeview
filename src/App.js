import React, { Component } from 'react';
import './App.css';
import Tree from './components/expandable-treeview/TreeView.js'
class App extends Component {
  render() {
    const fileStructure = {
      folderA:{
        fileOne:"File 1",
        fileTwo:"File 2"
      },
       fileThree:"File 3"
     };
     
      return  <Tree data={fileStructure}  />;
  }
}

export default App;

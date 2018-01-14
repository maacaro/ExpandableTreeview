import React, { Component } from 'react';
import Tree from './TreeView.js';

class SubTree extends React.Component{
state = {
  isCollapsed: false
};

render(){
    if(!this.props.item){
        return null;
    }
    return(
      <li 
        key={`complex-${this.props.item}-${this.props.index}`}
      > 
        <span
         onClick={()=>{this.setState({isCollapsed:!this.state.isCollapsed});}}
         >
         {this.state.isCollapsed
         ? '+'
         : '-'
         }
         {this.props.item}
        </span>
        {
        this.state.isCollapsed 
          ?null
         : 	
         <Tree
         data={this.props.data}
        />
        }
       </li>)};
}
export default SubTree;
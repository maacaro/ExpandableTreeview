import React, { Component } from 'react';
import Tree from './TreeView.js';

const SubTree = (props)=>{
    if(!props.item){
        return null;
    }
    return(
      <li 
        key={`complex-${props.item}-${props.index}`}
      > 
        <span
         onClick={props.onClick}
         >
         {!!props.isCollapsed
         ? '+'
         : '-'
         }
         {props.item}
        </span>
        {
        !!props.isCollapsed 
          ?null
         : 	
         <Tree
         data={props.data}
        />
        }
       </li>)};

export default SubTree;
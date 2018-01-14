import React, { Component } from 'react';
import SubTree from './SubTree.js';

class Tree extends React.Component{

 render(){
     const {data} = this.props;

     return (
         <ul >
             {Object.keys(data).map((key, index) => {
                 if(data[key] && typeof data[key] === 'object'){
                     return (
                       <SubTree 
                        key
                        item = {key}
                        data = {data[key]}
                        index={index}
                        />
                       )
                 } else {
                     return (
                         <li 
                             key={`simple-${key}-${index}`}
                         >
                             <span >{key}:</span>
                             <span >{data[key]}</span>
                         </li>
                     )
                 }
             })}
         </ul>
     );
 }

 toggle=(key)=>{
     this.setState((state) => {
       const isExpanded = new Map(state.isExpanded);
       isExpanded.set(key, !isExpanded.get(key)); // toggle
       return {isExpanded};
     });

 }

}
export default Tree;
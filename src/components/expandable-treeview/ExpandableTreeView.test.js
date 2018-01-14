import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './TreeView.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('rendering',()=>{
    it('should render a <ul>',()=>{
        const tree = shallow(<Tree data={{}}/>);
      
        const list = tree.find('ul');
      
    expect(list).toHaveLength(1);
    });

    it('should render a <ul> with 3 <li>',()=>{
        const tree = shallow(<Tree data={{key_1:'some_item', key_2:'some_item_2',key_3:'some_item_3'}}/>);
      
        const list = tree.find('ul');
        const listItem =  list.find('li');
      
    expect(listItem).toHaveLength(3);
    });

    it('should render a <ul> with 2 and 1 SubTree  <li>',()=>{
        const tree = shallow(<Tree data={{key_1:'some_item', key_2:{subTreeKey:'some_subtree_Item'} ,key_3:'some_item_3'}}/>);
      
        const list = tree.find('ul');
        const listItem =  list.find('li');
        const subTree = list.find('SubTree');
      
    expect(listItem).toHaveLength(2);
    expect(subTree).toHaveLength(1);
    });

  });
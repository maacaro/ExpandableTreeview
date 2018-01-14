import React from 'react';
import ReactDOM from 'react-dom';
import SubTree from './SubTree.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('rendering',()=>{
    it('should NOT render any <li>',()=>{
        const subTree = shallow(<SubTree />);
      
        const list = subTree.find('li');
      
    expect(list).toHaveLength(0);
    });

    it('should render 1 <li>',()=>{
        const subTree = shallow(<SubTree
            key={1}
            item = {'item'}
            data = {'some data'}
            index={'index'}
            />);
      
        const list = subTree.find('li');
      
    expect(list).toHaveLength(1);
    });

    it('should render 1 Tree',()=>{
        const subTree = shallow(<SubTree
            key={1}
            item = {'item'}
            data = {'some data'}
            index={'index'}
            />);
        const list = subTree.find('li');
        const tree = list.find('Tree');
      
    expect(tree).toHaveLength(1);
    });

  });
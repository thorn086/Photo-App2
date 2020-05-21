import React from 'react';
import Home from './Home';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('all other components render properly', () => {
    const home = shallow(<Home />);
  
    it('contains a Menu component', () => {
        expect(home.find('Menu').exists()).toBe(true);
    })

})
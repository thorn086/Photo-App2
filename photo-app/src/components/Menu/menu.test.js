import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure} from 'enzyme'
import Menu from './Menu'

configure({adapter: new Adapter()})

describe('Title component',()=>{
    
    const title = shallow(<Menu />)

    it('renders properly', ()=>{
        expect(title).toMatchSnapshot()
    })
})
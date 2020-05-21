import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure} from 'enzyme'
import Main from './Main'

configure({adapter: new Adapter()})

describe('Title component',()=>{
    
    const title = shallow(<Main />)

    it('renders properly', ()=>{
        expect(title).toMatchSnapshot()
    })
})
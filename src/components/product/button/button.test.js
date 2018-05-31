import 'raf/polyfill'
import React from 'react'
import Button from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Button />', () => {
  it('Should wrapper return button with text passed by prop', () => {
    const wrapper = shallow(<Button text='Eu quero' />)
    expect(wrapper.text()).to.equal('Eu quero')
  })
})

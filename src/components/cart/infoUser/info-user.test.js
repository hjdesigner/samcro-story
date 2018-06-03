import 'raf/polyfill'
import React from 'react'
import InfoUser from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<InfoUser />', () => {
  it('Should wrapper contain a label and input to the name', () => {
    const wrapper = shallow(<InfoUser />)
    expect(wrapper.find('label[htmlFor="name"]')).to.have.length(1)
    expect(wrapper.find('input[name="name"]')).to.have.length(1)
  })
  it('Should wrapper contain a label and input to the lastname', () => {
    const wrapper = shallow(<InfoUser />)
    expect(wrapper.find('label[htmlFor="lastname"]')).to.have.length(1)
    expect(wrapper.find('input[name="lastname"]')).to.have.length(1)
  })
  it('Should wrapper contain a label and input to the email', () => {
    const wrapper = shallow(<InfoUser />)
    expect(wrapper.find('label[htmlFor="email"]')).to.have.length(1)
    expect(wrapper.find('input[name="email"]')).to.have.length(1)
  })
})

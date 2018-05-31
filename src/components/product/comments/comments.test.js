import 'raf/polyfill'
import React from 'react'
import Comments from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Comments />', () => {
  it('Should wrapper contain an h2 with the title comment', () => {
    const wrapper = shallow(<Comments />)
    const title = wrapper.find('h2')
    expect(title).to.have.length(1)
    expect(title.text()).to.equal('Comente')
  })
  it('Should wrapper contain a textarea', () => {
    const wrapper = shallow(<Comments />)
    expect(wrapper.find('.comments__textarea')).to.have.length(1)
  })
  it('Should wrapper contain a button white the text send', () => {
    const wrapper = shallow(<Comments />)
    const button = wrapper.find('.comment__button')
    expect(button).to.have.length(1)
    expect(button.text()).to.equal('Enviar')
  })
})

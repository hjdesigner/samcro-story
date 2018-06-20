import 'raf/polyfill'
import React from 'react'
import TotalStand from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<TotalStand />', () => {
  it('Should contain text 2 products last case 2 in prop cartNumber', () => {
    const wrapper = shallow(<TotalStand cartNumber='2' />)
    const product = wrapper.find('.total-stand__title').at(0)
    expect(product.text()).to.equal('2 produtos')
  })
  it('Should contain text 4 products last case 4 in prop cartNumber', () => {
    const wrapper = shallow(<TotalStand cartNumber='4' />)
    const product = wrapper.find('.total-stand__title').at(0)
    expect(product.text()).to.equal('4 produtos')
  })
  it('Should contain text R$ 100 if passed 100 in prop totalStand', () => {
    const wrapper = shallow(<TotalStand cartNumber='4' totalStand='100' />)
    const product = wrapper.find('.total-stand__price').at(0)
    expect(product.text()).to.equal('R$ 100')
  })
  it('Should contain text R$ 10 if passed 10 in prop totalStand', () => {
    const wrapper = shallow(<TotalStand cartNumber='4' totalStand='10' />)
    const product = wrapper.find('.total-stand__price').at(0)
    expect(product.text()).to.equal('R$ 10')
  })
})

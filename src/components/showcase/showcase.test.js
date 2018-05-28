import 'raf/polyfill'
import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
  let wrapper1, data1
  beforeEach(() => {
    data1 = [
      {
        'id': 1,
        'name': 'camisa levi’s',
        'url': '/camisa-levis',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg',
        'priceOrigin': '90,00',
        'priceCurrent': '63,00'
      }
    ]
    wrapper1 = shallow(<Showcase item={data1} />)
  })
  it('Should wrapper1 return one li', () => {
    expect(wrapper1.find('li')).to.have.length(1)
  })
  it('Should wrapper1 contain image equal to the past in the data1 image field', () => {
    const image = wrapper1.find('figure')
    expect(image.contains(<img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg' />)).to.equal(true)
  })
})

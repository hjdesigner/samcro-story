import 'raf/polyfill'
import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
  let wrapper1, data1, wrapper2, data2, handleShowCase
  beforeEach(() => {
    data1 = [
      {
        'id': '1',
        'name': 'camisa levi’s',
        'url': '/camisa-levis',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg',
        'priceOrigin': '90,00',
        'priceCurrent': '63,00'
      }
    ]
    data2 = [
      {
        'id': '1',
        'name': 'camisa levi’s',
        'url': '/camisa-levis',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg',
        'priceOrigin': '90,00',
        'priceCurrent': '63,00'
      },
      {
        'id': '2',
        'name': 'vestido plissado',
        'url': '/vestido-plissado',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/myneq1eiq9zwu9cegwz0.jpg',
        'priceOrigin': '',
        'priceCurrent': '100,00'
      }
    ]
    handleShowCase = (id) => () => {}
    wrapper1 = shallow(<Showcase items={data1} handleShowCase={handleShowCase} />)
    wrapper2 = shallow(<Showcase items={data2} handleShowCase={handleShowCase} />)
  })
  it('Should wrapper1 return one li', () => {
    expect(wrapper1.find('li')).to.have.length(1)
  })
  it('Should wrapper1 contain image equal to the past in the data1 image field', () => {
    const image = wrapper1.find('figure')
    expect(image.contains(<img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg' alt='camisa levi’s' />)).to.equal(true)
  })
  it('Should the wrapper1 component contain a title equal to the last one by data1', () => {
    const title = wrapper1.find('h2')
    expect(title.text()).to.equal('camisa levi’s')
  })
  it('Should the wrapper1 component contain a price origin equal to the last one by data1', () => {
    const priceOrigin = wrapper1.find('.price-origin')
    expect(priceOrigin.text()).to.equal('De R$ 90,00')
  })
  it('Should the wrapper1 component contain a price current equal to the last one by data1', () => {
    const priceCurrent = wrapper1.find('.price-current')
    expect(priceCurrent.text()).to.equal('Por R$ 63,00')
  })
  it('Should wrapper2 return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Should wrapper2 contain two image equal to the past in the data2 image field', () => {
    const image1 = wrapper2.find('figure').at(0)
    const image2 = wrapper2.find('figure').at(1)
    expect(image1.contains(<img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg' alt='camisa levi’s' />)).to.equal(true)
    expect(image2.contains(<img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/myneq1eiq9zwu9cegwz0.jpg' alt='vestido plissado' />)).to.equal(true)
  })
  it('Should the wrapper2 component contain two title equal to the last one by data2', () => {
    const title1 = wrapper2.find('h2').at(0)
    const title2 = wrapper2.find('h2').at(1)
    expect(title1.text()).to.equal('camisa levi’s')
    expect(title2.text()).to.equal('vestido plissado')
  })
  it('Should the wrapper2 component contain two price origin equal to the last one by data2', () => {
    const priceOrigin1 = wrapper2.find('.price-origin').at(0)
    const priceOrigin2 = wrapper2.find('.price-origin').at(1)
    expect(priceOrigin1.text()).to.equal('De R$ 90,00')
    expect(priceOrigin2.text()).to.equal('')
  })
  it('Should the wrapper2 component contain two price current equal to the last one by data2', () => {
    const priceCurrent1 = wrapper2.find('.price-current').at(0)
    const priceCurrent2 = wrapper2.find('.price-current').at(1)
    expect(priceCurrent1.text()).to.equal('Por R$ 63,00')
    expect(priceCurrent2.text()).to.equal('Por R$ 100,00')
  })
})

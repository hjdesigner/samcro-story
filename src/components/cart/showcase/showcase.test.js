import 'raf/polyfill'
import React from 'react'
import Showcase from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Showcase />', () => {
  let wrapper1, data1, wrapper2, data2
  beforeEach(() => {
    data1 = [
      {
        'id': '1',
        'name': 'camisa levi’s',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg',
        'value': '63,00',
        'salesman': 'Carol'
      }
    ]
    data2 = [
      {
        'id': '1',
        'name': 'camisa levi’s',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg',
        'value': '63,00',
        'salesman': 'Carol'
      },
      {
        'id': '2',
        'name': 'vestido plissado',
        'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/myneq1eiq9zwu9cegwz0.jpg',
        'value': '100,00',
        'salesman': 'Henrique'
      }
    ]
    wrapper1 = shallow(<Showcase items={data1} />)
    wrapper2 = shallow(<Showcase items={data2} />)
  })
  it('Should wrapper1 return one li', () => {
    expect(wrapper1.find('li')).to.have.length(1)
  })
  it('Wrapper1 should contain link whit data-id correct equal id', () => {
    expect(wrapper1.find('[data-id="1"]')).to.have.length(1)
  })
  it('Should wrapper1 contain image equal to the past in the data1 image field', () => {
    const image = wrapper1.find('figure')
    expect(image.contains(<img src='https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_294,q_70,w_276/xdhrdbpszre2sqjdzpmz.jpg' alt='camisa levi’s' />)).to.equal(true)
  })
  it('Should the wrapper1 component contain a title equal to the last one by data1', () => {
    const title = wrapper1.find('h2')
    expect(title.text()).to.equal('camisa levi’s Vendido por: Carol')
  })
  it('Should the wrapper1 component contain a price current equal to the last one by data1', () => {
    const priceCurrent = wrapper1.find('.cart__price-current')
    expect(priceCurrent.text()).to.equal('Por R$ 63,00')
  })
  it('Should wrapper2 return two li', () => {
    expect(wrapper2.find('li')).to.have.length(2)
  })
  it('Wrapper2 should contain two link whit data-id correct equal id', () => {
    const firstLi = wrapper2.find('li').at(0)
    const lastLi = wrapper2.find('li').at(1)
    expect(firstLi.find('[data-id="1"]')).to.have.length(1)
    expect(lastLi.find('[data-id="2"]')).to.have.length(1)
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
    expect(title1.text()).to.equal('camisa levi’s Vendido por: Carol')
    expect(title2.text()).to.equal('vestido plissado Vendido por: Henrique')
  })
  it('Should the wrapper2 component contain two price current equal to the last one by data2', () => {
    const priceCurrent1 = wrapper2.find('.cart__price-current').at(0)
    const priceCurrent2 = wrapper2.find('.cart__price-current').at(1)
    expect(priceCurrent1.text()).to.equal('Por R$ 63,00')
    expect(priceCurrent2.text()).to.equal('Por R$ 100,00')
  })
})

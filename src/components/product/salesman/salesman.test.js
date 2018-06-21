import 'raf/polyfill'
import React from 'react'
import Salesman from './index'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
Enzyme.configure({ adapter: new Adapter() })

describe('<Salesman />', () => {
  let data1, wrapper1, data2, wrapper2
  beforeEach(() => {
    data1 = {
      'id': 1,
      'name': 'camisa levi’s',
      'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_600,q_70,w_600/xdhrdbpszre2sqjdzpmz.jpg',
      'priceOrigin': '90,00',
      'priceCurrent': '63,00',
      'installmentPayment': '3',
      'installmentValue': '12,60',
      'salesman': 'Henrique',
      'descriptiom': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas faucibus lobortis. Mauris at venenatis justo, sed tincidunt lectus. Praesent a sem vitae libero imperdiet consectetur. Sed rhoncus aliquet lorem eget porttitor. Fusce sit amet augue eget mi convallis consequat. Maecenas lorem nulla, pulvinar sed porttitor aliquet, porta et lacus. Mauris volutpat interdum sapien, sit amet suscipit augue ornare ac. Donec quis massa venenatis metus tincidunt porta. Quisque metus tellus, vestibulum quis urna a, congue suscipit sapien. Praesent ultricies sem leo, eu consectetur lacus placerat eget. Ut elit elit, consectetur ac mauris a, consectetur tincidunt magna. Proin blandit sodales interdum.'
    }
    data2 = {
      'id': 2,
      'name': 'vestido plissado',
      'url': '/vestido-plissado',
      'image': 'https://res-3.cloudinary.com/enjoei/image/upload/a_0,c_fill,fl_lossy.progressive,g_center,h_600,q_70,w_600/myneq1eiq9zwu9cegwz0.jpg',
      'priceOrigin': '',
      'priceCurrent': '100,00',
      'installmentPayment': '3',
      'installmentValue': '33,33',
      'salesman': 'Caroline',
      'descriptiom': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas faucibus lobortis. Mauris at venenatis justo, sed tincidunt lectus. Praesent a sem vitae libero imperdiet consectetur. Sed rhoncus aliquet lorem eget porttitor. Fusce sit amet augue eget mi convallis consequat. Maecenas lorem nulla, pulvinar sed porttitor aliquet, porta et lacus. Mauris volutpat interdum sapien, sit amet suscipit augue ornare ac. Donec quis massa venenatis metus tincidunt porta. Quisque metus tellus, vestibulum quis urna a, congue suscipit sapien. Praesent ultricies sem leo, eu consectetur lacus placerat eget. Ut elit elit, consectetur ac mauris a, consectetur tincidunt magna. Proin blandit sodales interdum.'
    }
    wrapper1 = shallow(<Salesman name={data1.salesman} />)
    wrapper2 = shallow(<Salesman name={data2.salesman} />)
  })
  it('Should the wrapper1 component contain a sales man equal to the last one by data1', () => {
    const text = wrapper1.find('.sales-man__text')
    expect(text.text()).to.equal('Vendido por: Henrique')
  })
  it('Should the wrapper2 component contain a sales man equal to the last one by data2', () => {
    const text = wrapper2.find('.sales-man__text')
    expect(text.text()).to.equal('Vendido por: Caroline')
  })
})

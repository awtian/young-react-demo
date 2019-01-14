import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {shallow} from 'enzyme'

describe('<App /> testing ', () => {
  const wrapper = shallow(<App />)
  
  test('it has a div', () => {
    const wrapperDiv = wrapper.find('div')
    expect(wrapperDiv).toHaveLength(1)
  })

  test('it has a div', () => {
    const wrapperDiv = wrapper.find('h1')
    expect(wrapperDiv).toHaveLength(1)
  })

  test('it has a 4 route', () => {
    const wrapperDiv = wrapper.find('Route')
    expect(wrapperDiv).toHaveLength(4)
  })

})
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

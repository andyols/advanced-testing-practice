import React from 'react'
import { Provider } from 'react-redux'
import CityDropDownContainer from './index'
import { mount } from 'enzyme'
import store from '../../store'
let wrapper = null

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <div>
        <CityDropDownContainer />
      </div>
    </Provider>
  )
})

describe('CityDropDownContainer', () => {
  it('should change currentCity in state when the drop down changes', () => {
    const currentCity = wrapper.find('select').at(0)

    currentCity.simulate('change', {
      target: { value: 'New York' }
    })

    expect(store.getState().currentCity).toBe('New York')
  })
})

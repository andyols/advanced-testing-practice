import React from 'react'
import { Provider } from 'react-redux'
import CurrentCityContainer from './index'
import { mount } from 'enzyme'
import store from '../../store'
import { setCurrentCity } from '../../actions'
let wrapper = null

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <div>
        <CurrentCityContainer />
      </div>
    </Provider>
  )
})

describe('CurrentCityContainer', () => {
  it('should change currentCityContainer text when currentCity in state changes', () => {
    store.dispatch(setCurrentCity('New York'))

    const currentCityText = wrapper
      .find('div')
      .at(0)
      .text()

    expect(currentCityText).toBe('CurrentCity: New York')
  })
})

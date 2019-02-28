import React from 'react'
import { Provider } from 'react-redux'
import ChangeTemperatureContainer from './ChangeTemperatureContainer'
import { mount } from 'enzyme'
import store from '../../store'
let wrapper = null

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <div>
        <ChangeTemperatureContainer />
      </div>
    </Provider>
  )
})

describe('ChangeTemperatureContainer', () => {
  it('should change currentTemp in state when the text box changes', () => {
    const currentTempInput = wrapper.find('[type="number"]').at(0)

    currentTempInput.simulate('change', {
      target: { value: 10 }
    })

    expect(store.getState().currentTemp).toBe(10)
  })
})

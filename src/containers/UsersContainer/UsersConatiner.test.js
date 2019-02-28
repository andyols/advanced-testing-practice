import React from 'react'
import { Provider } from 'react-redux'
import UsersContainer from './index'
import { mount } from 'enzyme'
import store from '../../store'
let wrapper = null

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <div>
        <UsersContainer />
      </div>
    </Provider>
  )
})

describe('UserContainer', () => {
  it('should render an li for each user', () => {
    expect(wrapper.find('li').length).toBe(8)
  })
})

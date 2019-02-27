import React from 'react'
import { Provider } from 'react-redux'
import UserButtonsContainer from './index'
import { mount } from 'enzyme'
import store from '../../store'
let wrapper = null

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <div>
        <UserButtonsContainer />
      </div>
    </Provider>
  )
})

describe('AddUserButton', () => {
  it('should increase users array length by 1', () => {
    const addUserButton = wrapper.find('button').at(0)
    const currentUsersLength = store.getState().users.length

    addUserButton.simulate('click')

    expect(store.getState().users.length).toBe(currentUsersLength + 1)
  })
})

describe('RemoveUserButton', () => {
  it('should decrease users array length by 1', () => {
    const removeUserButton = wrapper.find('button').at(1)
    const currentUsersLength = store.getState().users.length

    removeUserButton.simulate('click')

    expect(store.getState().users.length).toBe(currentUsersLength - 1)
  })
})

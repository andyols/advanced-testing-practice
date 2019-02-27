# Testing Practice

### Calculations

- Implement the calculation functions

### Function

- Implement the code for the functions as described in the comments

### Add Calculation Tests

- subtracts 4 from 5 to equal 1
- multiply 4 by 5 to equal 20
- device 100 by 4 to equal 25

### Add Function Tests

- Implement the tests as described in the comments

## TODO START

### User Button Tests

- Create a folder for UserButtonContainer in containers
- Move UserButtonsContainer.js into this folder and rename it index
- Fix import paths
- Add a file UserButtonsContainer.tests.js
  - Import UserButtonsContainer into the test
  - Import store into the test
  - create a variable called “wrapper”
  - in beforeAll, mount the Provider and UserButtonsContainer and assign to wrapper
  - Create a describe “Add User Button”
    - Create an it “should increase users array length by 1”
    - Use the wrapper to find the first button
    - Simulate a click on the button
    - use store.getState() to check the length of the users array
    - expect it toBe 1 more than the current length
  - Create a describe “Remove User Button”
    - Create an it “should decrease users array length by 1”
    - Use the wrapper to find the second button
    - Simulate a click on the button
    - use store.getState() to check the length of the users array
    - expect it toBe 1 less than the current length

### User Display Tests

- Create a folder for UserContainer in containers
- Create a file for UserContainer.test.js
- describe “UserContainer”
- it “should render an li for each user”
- mount Provider and SpecialTextContainer into wrapper
- use the store to dispatch a “ADD_USER” action with the value of a user object
- `expect(wrapper.find(“li”)).to.have.length(8);`

## TODO END

### Hopefully at this point you can see there is a pattern to making the tests

### ChangeTemperatureContainer.js

- Create a test file for this container to ensure that when the text box changes, the state currentTemp changes

### CityDropDownContainer.js

- Create a test file to ensure that when the drop down changes, the state currentCity changes

### CurrentCityContainer.js

- Create a test file to ensure that when the state currentCity is change, the text of the div changes to “CurrentCity: whatever city”

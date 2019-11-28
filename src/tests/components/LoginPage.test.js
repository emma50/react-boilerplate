import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'
import { LoginPage } from "../../components/LoginPage"

test("should render LoginPage correctly", () => {
    const wrapper = shallow(<LoginPage/>)
    expect(toJson(wrapper)).toMatchSnapshot()
})

test("should call startLogin on button click", () => {
    const startLoginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>)

    wrapper.find("button").simulate("click")
    expect(startLoginSpy).toHaveBeenCalled() 
})
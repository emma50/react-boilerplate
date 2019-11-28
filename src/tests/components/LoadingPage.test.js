import React from "react"
import { shallow } from "enzyme"
import toJson from 'enzyme-to-json'
import LoadingPage from "../../components/LoadingPage"

test("should render Loadingage correctly", () => {
    const wrapper = shallow(<LoadingPage/>)
    expect(toJson(wrapper)).toMatchSnapshot()
})
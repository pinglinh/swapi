import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchContainer from "./SearchContainer";

configure({ adapter: new Adapter() });

describe("SearchContainer component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper.exists()).toBe(true);
  });
});
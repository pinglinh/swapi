import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchResultCard from "./SearchResultCard";

configure({ adapter: new Adapter() });

describe("SearchResultCard component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchResultCard />);

    expect(wrapper.exists()).toBe(true);
  });
});
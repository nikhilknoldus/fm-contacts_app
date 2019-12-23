import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./utils/testUtils";
import { ContactReducer } from "./store/reducer";

function testStore() {
  const INITIAL_STATE: any = [
    {
      name: "Adam Christ",
      phone: "9988877661",
      email: "abca@gmail.com",
      favourite: false
    },
    {
      name: "Roy Phillip",
      phone: "9988877661",
      email: "abcb@gmail.com",
      favourite: false
    },
    {
      name: "Tina Embassy",
      phone: "9988877661",
      email: "abcc@gmail.com",
      favourite: false
    },
    {
      name: "Luis Perlman",
      phone: "9988877661",
      email: "abcd@gmail.com",
      favourite: false
    },
    {
      name: "Adam Christ",
      phone: "9988877661",
      email: "abce@gmail.com",
      favourite: false
    },
    {
      name: "Roy Phillip",
      phone: "9988877661",
      email: "abcf@gmail.com",
      favourite: false
    },
    {
      name: "Tina Embassy",
      phone: "9988877661",
      email: "abcg@gmail.com",
      favourite: false
    },
    {
      name: "Luis Perlman",
      phone: "9988877661",
      email: "abch@gmail.com",
      favourite: false
    }
  ];
  return INITIAL_STATE;
}

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe("App Component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render without error", () => {
    const component = findByTestAttr(wrapper, "AppComponent");
    expect(component.length).toBe(1);
  });

  it("Should render with provider", () => {
    const contactData = testStore();
    const component = findByTestAttr(wrapper, "AppContactProvider");
    expect(component.props().value[0]).toEqual(contactData);
  });
});

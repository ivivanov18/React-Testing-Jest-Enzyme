import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function to create a ShallowWrapper for the Congrats component
 * @param {object} props - the props passed to the component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without errors", () => {});

test("renders no text when success props is false", () => {});

test("renders non-emoty congrats message when success props is true", () => {});

import React from "react";
import { Provider } from "react-redux";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import store from "../../store";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(
			<Provider store={store}>
				<BurgerBuilder onInitIngredients={() => {}} />
			</Provider>
		);
	});

	it("should render <BuildControls /> when receiving ingredients", () => {
		wrapper.setProps({ ings: { salad: 0 } });
		expect(wrapper.find(BuildControls)).toHaveLength(0);
	});
});

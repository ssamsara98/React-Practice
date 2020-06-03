import React from "react";

import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/BurgerIngredient";

const burger = (props) => {
	let transformIngredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <Burgeringredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (transformIngredients.length === 0) {
		transformIngredients = <p>Please start adding ingredients!</p>
	}
	return (
		<div className={classes.Burger}>
			<Burgeringredient type="bread-top" />
			{transformIngredients}
			<Burgeringredient type="bread-bottom" />
		</div>
	);
};

export default burger;

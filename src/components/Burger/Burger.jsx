import React from "react";

import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/BurgerIngredient";

const burger = (props) => {
	const transformIngredients = Object.keys(props.ingredients).map((igKey) => {
		return [...Array(props.ingredients[igKey])].map((_, i) => {
			return <Burgeringredient key={igKey + i} type={igKey} />;
		});
	});
	return (
		<div className={classes.Burger}>
			<Burgeringredient type="bread-top" />
			{transformIngredients}
			<Burgeringredient type="bread-bottom" />
		</div>
	);
};

export default burger;

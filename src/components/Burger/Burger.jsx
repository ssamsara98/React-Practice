import React from "react";

import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/BurgerIngredient";

const burger = (props) => {
	return (
		<div className={classes.Burger}>
			<Burgeringredient type="bread-top" />
			<Burgeringredient type="cheese" />
			<Burgeringredient type="meat" />
			<Burgeringredient type="bread-bottom" />
		</div>
	);
};

export default burger;

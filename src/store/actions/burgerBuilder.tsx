import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name: any) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name,
	};
};

export const removeIngredient = (name: any) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name,
	};
};

export const setIngredients = (ingredients: any) => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients,
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED,
	};
};

export const initIngredients = () => {
	return (dispatch: any) => {
		axios
			.get("/ingredients.json")
			.then((response: any) => {
				dispatch(setIngredients(response.data));
			})
			.catch((error: any) => {
				dispatch(fetchIngredientsFailed());
			});
	};
};

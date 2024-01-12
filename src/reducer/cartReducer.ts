import { CartAction, CartState } from "../@types/products";
import { initialState } from "../context/CartContext";

export function cartReducer(state: CartState, action: CartAction) {
	console.log(state, action);

	switch (action.type) {
		case "addItem":
			const filteredCart = state.cartItems.filter(
				item => item.id !== action.payload.id
			);
			return {
				...state,
				cartItems: [
					...filteredCart,
					{
						...action.payload,
						numOfItem: action.payload.numOfItem + 1,
					},
				],
			};
		case "deleteAllItems":
			return {
				...state,
				cartItems: [...initialState.cartItems],
			};

		case "deleteOneItem":
			if (action.payload.numOfItem <= 1) {
				const filteredCart = state.cartItems.filter(
					item => item.id !== action.payload.id
				);

				return {
					...state,
					cartItems: [...filteredCart, { ...action.payload, numOfItem: 0 }],
				};
			} else {
				const filteredCart = state.cartItems.filter(
					item => item.id !== action.payload.id
				);

				return {
					...state,
					cartItems: [
						...filteredCart,
						{ ...action.payload, numOfItem: action.payload.numOfItem - 1 },
					],
				};
			}
		default:
			return state;
	}
}

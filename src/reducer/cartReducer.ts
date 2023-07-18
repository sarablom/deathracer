type CartItem = {
	id: string;
	name: string;
	price: number;
	numOfItem: number;
};

type CartState = {
	cartItems: CartItem[] | [];
	totalNumOfItems: number;
};

type CartAction = {
	type: "addItem" | "deleteAllItems" | "deleteOneItem";
	payload: CartItem;
};

export function cartReducer(state: CartState, action: CartAction) {
	const itemInCart = state.cartItems.find(
		item => item.id === action.payload.id
	);
	const filteredCart = state.cartItems.filter(
		item => item.id !== action.payload.id
	);

	switch (action.type) {
		case "addItem":
			if (itemInCart) {
				return {
					cartItems: [
						...filteredCart,
						{
							...itemInCart,
							numOfItem: itemInCart.numOfItem + 1,
						},
					],
					totalNumOfItems: state.totalNumOfItems + 1,
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, action.payload],
					totalNumOfItems: state.totalNumOfItems + 1,
				};
			}
		case "deleteAllItems":
			if (itemInCart) {
				return {
					cartItems: filteredCart,
					totalNumOfItems: state.totalNumOfItems - itemInCart.numOfItem,
				};
			}
		case "deleteOneItem":
			if (itemInCart && itemInCart.numOfItem === 1) {
				return {
					cartItems: filteredCart,
					totalNumOfItems: state.totalNumOfItems - 1,
				};
			} else if (itemInCart && itemInCart.numOfItem > 1) {
				return {
					cartItems: [
						...filteredCart,
						{ ...itemInCart, numOfItem: itemInCart.numOfItem - 1 },
					],
					totalNumOfItems: state.totalNumOfItems - 1,
				};
			}
		default:
			return state;
	}
}
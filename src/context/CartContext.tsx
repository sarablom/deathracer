"use client";
import { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";
import { CartAction, CartState, cartReducer } from "../reducer/cartReducer";

type CartContextType = {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
};

const initialState = {
	cartItems: [],
	totalNumOfItems: 0,
};

export const CartContext = createContext<CartContextType>(
	{} as CartContextType
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		cartItems: [],
		totalNumOfItems: 0,
	});

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export function useCart() {
	const data = useContext(CartContext);

	if (!data) {
		throw new Error("Cannot consume CartContext without a CartContextProvider");
	}

	return data;
};

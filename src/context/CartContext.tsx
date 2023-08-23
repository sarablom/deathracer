"use client";
import { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { CartAction, CartState } from "../@types/products";

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
	const [state, dispatch] = useReducer(cartReducer, initialState);

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

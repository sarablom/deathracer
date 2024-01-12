"use client";
import { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { CartAction, CartState } from "../@types/products";

type CartContextType = {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
};

export const initialState = {
	cartItems: [
		{
			id: "1",
			title: "T-shirt",
			description:
				"T-shirt av ekologisk bomull med ett stort Deathracer-tryck centrerat över bröstet",
			colors: ["#FFF", "#000", "#454545"],
			sizes: ["XS", "S", "M", "L", "XL", "XXL"],
			price: 249,
			img: "t-shirt.png",
			numOfItem: 0,
		},
		{
			id: "2",
			title: "Tote bag",
			description: "Praktisk tygkasse som du kan ha med dig överallt",
			colors: ["#FFF", "#000", "#454545"],
			sizes: [],
			price: 189,
			img: "tote-bag.png",
			numOfItem: 0,
		},
		{
			id: "3",
			title: "Stickers",
			description: "10 starka stickers att klistra precis överallt",
			colors: ["#FFF"],
			sizes: ["8x5 cm", "16x10cm", "24x15cm"],
			price: 79,
			img: "logo.jpg",
			numOfItem: 0,
		},
	]
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
}

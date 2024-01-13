export type Product = {
	id: string;
	title: string;
	description: string;
	colors: string[];
	sizes: string[];
	price: number;
	img: string;
	numOfItem: number;
};

export type CartItem = {
	id: string;
	title: string;
	price: number;
	numOfItem: number;
};

export type CartState = {
	cartItems: Product[];
};

export type CartAction = {
	type: "addItem" | "deleteAllItems" | "deleteOneItem";
	payload: Product;
};

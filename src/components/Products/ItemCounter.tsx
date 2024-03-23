"use client";
import { Product } from "../../@types/products";
import { useCart } from "../../context/CartContext";
import { NumberInputWrapper, NumberInput } from "./styles";

export const ItemCounter = ({ cartItem }: { cartItem: Product }) => {
	const { dispatch } = useCart();

	const handleAddItem = () => {
		dispatch({ type: "addItem", payload: cartItem });
	};

	const handleDecreaseItem = () => {
		dispatch({ type: "deleteOneItem", payload: cartItem });
	};

	return (
		<NumberInputWrapper>
			<button
				type="button"
				className="button-decrement"
				onClick={handleDecreaseItem}
				data-input-id="hue"
				data-operation="decrement"
			></button>
			<NumberInput>{cartItem.numOfItem}</NumberInput>
			<button
				type="button"
				className="button-increment"
				onClick={handleAddItem}
				data-input-id="hue"
				data-operation="increment"
			></button>
		</NumberInputWrapper>
	);
};

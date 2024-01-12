"use client";
import { useCart } from "../../context/CartContext";
import styled from "styled-components";
import { PlusCircle } from "react-feather";

import { Product } from "../../@types/products";

export const BuyButton = ({ cartItem }: { cartItem: Product }) => {
	const { dispatch } = useCart();

	const handleOnAddToCart = () => {
		dispatch({ type: "addItem", payload: cartItem });
	};

	return (
		<ButtonWrapper onClick={handleOnAddToCart}>
			Lägg till <PlusCircle />
		</ButtonWrapper>
	);
};

const ButtonWrapper = styled.button`
	display: flex;
	gap: 8px;
	height: fit-content;
	cursor: pointer;
	border: none;
	border-radius: 8px;
	margin-left: auto;
	padding: 8px 16px;
	background: var(--color-success);
	color: var(--color-whiteish);
	text-transform: uppercase;
`;

"use client";
import styled from "styled-components";
import { PlusCircle } from "react-feather";

import { useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";

export const BuyButton = () => {
	// const { dispatch } = useReducer(cartReducer);
	return (
		<ButtonWrapper>
			ADD TO CART <PlusCircle />
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
	background: var(--color-blackish);
	color: var(--color-whiteish);
`;

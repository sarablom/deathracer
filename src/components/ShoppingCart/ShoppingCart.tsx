"use client";
import { useContext, useReducer } from "react";
import { cartReducer } from "../../reducer/cartReducer";

import { ShoppingCart as Cart } from "react-feather";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

export const ShoppingCart = () => {
	const { state } = useCart();

	return (
		<CartWrapper>
			<Cart />
			<ItemCount>{state.totalNumOfItems}</ItemCount>
		</CartWrapper>
	);
};

const CartWrapper = styled.div`
	position: relative;
	margin-left: auto;
	height: fit-content;
	width: fit-content;
`;

const ItemCount = styled.span`
	position: absolute;
	top: -4px;
	right: -8px;
	display: grid;
	place-content: center;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	padding: 4px;
	background: #fb3640;
	color: white;
	font-size: 10px;
	font-weight: 700;
`;

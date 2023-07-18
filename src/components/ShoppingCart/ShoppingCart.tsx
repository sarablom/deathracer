"use client";
import { ShoppingCart as Cart } from "react-feather";
import styled from "styled-components";

export const ShoppingCart = () => {
	return (
		<CartWrapper>
			<Cart />
			<ItemCount>1</ItemCount>
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
	background: #FB3640;
	color: white;
	font-size: 10px;
	font-weight: 700;
`;

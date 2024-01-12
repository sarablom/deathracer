import styled from "styled-components";

export const CartWrapper = styled.div`
	position: relative;
	margin-left: auto;
	height: fit-content;
	width: fit-content;
`;

export const ItemCount = styled.span`
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

export const CartButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	color: inherit;
`;

export const CloseButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	align-self: flex-end;
`;

export const CartList = styled.ol`
	list-style-type: none;
	padding-left: 0;
`;

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
	margin-left: auto;
	z-index: 2;
`;

export const CartList = styled.ol`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding-left: 0;
	position: relative;
	background: white;
	border-radius: 8px;
	padding: 32px;
	z-index: 2;
`;

export const CartListItem = styled.li`
	color: var(--color-blackish);

  :last-of-type {
    align-self: flex-end;
    font-weight: 700;
  }
`;

export const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	background: hsl(0deg 0% 0% / 0.75);
	z-index: 1;
`;

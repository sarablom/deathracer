"use client";
import styled from "styled-components";

export const ListWrapper = styled.ul`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin: 0 auto;
	padding: 0;
`;

export const ListItem = styled.li`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	list-style-type: none;
	background: var(--color-medium-grey);
	color: var(--color-blackish);
	border-radius: 16px;
	padding: 32px;
`;

export const ProductInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ProductDescription = styled.p`
	max-width: 400px;
`;

export const ProductDetailsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

type ColorProps = {
	color: string;
};

export const ProductColors = styled.span<ColorProps>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid var(--color-blackish);
	background: ${props => props.color};
`;

export const ProductSizes = styled.span`
	display: grid;
	place-content: center;
	width: fit-content;
	height: 24px;
	border-radius: 4px;
	border: 1px solid var(--color-blackish);
	padding: 2px 4px;
	background: var(--color-whiteish);
`;

export const ProductPrice = styled.p`
	margin-left: auto;
	font-weight: 600;
	font-size: 1.8rem;
`;

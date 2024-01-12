"use client";
import styled from "styled-components";

export const ListWrapper = styled.ul`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin: 0 auto;
	padding: 0;
	padding-bottom: 32px;
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
	width: max-content;
	max-width: 100%;
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

export const ImageWrapper = styled.div`
	height: 100%;
	width: 200px;
`;

export const NumberInputWrapper = styled.div`
	width: 75px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  align-self: flex-end;

	button {
		position: relative;
		height: 100%;
		margin-top: 32px;
		padding: 12px 16px;
		background-color: var(--color-mustard-extra-light);
		border: 1px solid var(--color-mustard-light);
		border-radius: none;
		transition: all 0.1s ease-out;
		cursor: pointer;
		-webkit-appearance: none;
		appearance: none;
		-webkit-transform: scale(1);
		transform: scale(1);
		margin: 0;
		color: var(--color-black);

		&:active,
		&:focus {
			outline: none;
		}

		&:after {
			content: "";

			position: absolute;

			opacity: 1;

			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			transition: inherit;

			background-position: center;
			background-repeat: no-repeat;
		}

		&:disabled {
			pointer-events: none;

			&:after {
				opacity: 0.25;
			}
		}
	}

	.button-decrement::after {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 12H7' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	}

	.button-increment::after {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 7V17' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17 12H7' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	}

	.button-decrement {
		border-right: none;
	}

	.button-increment {
		border-left: none;
	}
`;

export const NumberInput = styled.div`
	display: grid;
  place-content: center;
  font-size: 18px;
  font-weight: 700;

	/* input[type="number"] {
		-webkit-appearance: none;
		-webkit-border-radius: 0px;
		-moz-appearance: none;
		appearance: none;
		position: relative;
		width: 100%;
		min-width: 100%;
		height: 48px;
		background-color: var(--color-mustard-extra-light);
		border: 1px solid var(--color-mustard-light);
		border-left: 1px solid rgba(0, 0, 0, 0);
		border-right: 1px solid rgba(0, 0, 0, 0);
		border-radius: none;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		transition: all 0.2s ease-out;
		-moz-appearance: textfield;

		&:focus {
			background-color: white;
			border: 1px solid var(--color-mustard-midtone);
			outline: none;
		}

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	} */
`;

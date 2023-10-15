"use client";
import styled from "styled-components";
import { ArrowUpCircle } from "react-feather";

export const ToTopOfPageButton = () => {
	return (
		<Button
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				})
			}
		>
			<StyledArrowUpCircle />
		</Button>
	);
};

const Button = styled.button`
	position: fixed;
	bottom: 32px;
	right: 32px;
	border: none;
	background: var(--color-background);
	cursor: pointer;
  z-index: 1;
`;

const StyledArrowUpCircle = styled(ArrowUpCircle)`
	width: 44px;
	height: 44px;
	stroke: var(--color-text);
`;

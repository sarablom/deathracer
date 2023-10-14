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
	border: none;
	background: var(--color-whiteish);
	cursor: pointer;
`;

const StyledArrowUpCircle = styled(ArrowUpCircle)`
	position: fixed;
	bottom: 32px;
	right: 32px;
	width: 44px;
	height: 44px;
`;

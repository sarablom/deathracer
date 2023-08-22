"use client";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
	display: flex;
	align-items: flex-start;
	background: var(--color-blackish);
	color: var(--color-whiteish);
	animation: foldFromBottom 1s ease-in forwards;

@keyframes foldFromBottom {
from {
	transform: translateY(175px);
	opacity: 0;
}

to {
	transform: translateY(0);
	opacity: 1;
}
}

	p {
		padding: 32px;
	}
`;

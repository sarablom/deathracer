"use client";
import styled from "styled-components";

export const MobielNavWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
	height: 100vh;
	padding: 16px;
	background: var(--color-blackish);
	color: var(--color-whiteish);

	button {
		border: none;
		background: transparent;
		cursor: pointer;
		align-self: flex-end;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		font-size: 1.5rem;
		width: 100%;
	}
`;

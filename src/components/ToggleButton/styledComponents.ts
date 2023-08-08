import styled from "styled-components";

type StyleProps = {
	on: boolean;
};

export const ToggleWrapper = styled.button<StyleProps>`
	display: flex;
	align-items: center;
	gap: 4px;
	width: 48px;
	height: 22px;
	border-radius: 1000px;
	border: none;
	padding: 2px;
	border: ${({ on }) =>
		on
			? "3px solid var(--color-blackish)"
			: "3px solid var(--color-grey)"};
	background: transparent;
	cursor: pointer;
	box-sizing: content-box;
	outline-offset: 6px;

	span {
		display: block;
		height: 100%;
		aspect-ratio: 1 / 1;
		background: ${({ on }) =>
			on ? "var(--color-blackish)" : "var(--color-grey)"};
		border-radius: 1000px;
	}
`;

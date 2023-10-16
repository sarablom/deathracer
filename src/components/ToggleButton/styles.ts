import styled from "styled-components";

type StyleProps = {
	turnedOn: boolean;
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
	border: ${({ turnedOn }) =>
		turnedOn
			? "3px solid var(--color-text)"
			: "3px solid var(--color-grey)"};
	background: transparent;
	cursor: pointer;
	box-sizing: content-box;
	outline-offset: 6px;

	span {
		display: block;
		height: 100%;
		aspect-ratio: 1 / 1;
		background: ${({ turnedOn }) =>
			turnedOn ? "var(--color-text)" : "var(--color-grey)"};
		border-radius: 1000px;
	}
`;

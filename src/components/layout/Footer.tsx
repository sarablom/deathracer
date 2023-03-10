import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => (
	<FooterWrapper>
		<p>&#169; Deathracer, 2023</p>
	</FooterWrapper>
);

const FooterWrapper = styled.footer`
	display: flex;
	align-items: flex-start;
	background: var(--color-blackish);
	color: var(--color-whiteish);

	p {
		padding: 32px;
	}
`;

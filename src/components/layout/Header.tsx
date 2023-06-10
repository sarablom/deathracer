import styled from "styled-components";
import { Nav } from "./Nav";

export const Header = () => {
	return (
		<HeaderWrapper>
			<Nav />
		</HeaderWrapper>
	);
};
const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	background: var(--color-secondary);
`;

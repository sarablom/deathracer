import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";
import { Lato } from "@next/font/google";

const latoRegular = Lato({
	weight: "400",
});

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
	<Wrapper className={latoRegular.className}>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</Wrapper>
);

const Wrapper = styled.div`
	min-height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	flex: 1;
	align-self: center;
	margin-top: 2rem;
`;

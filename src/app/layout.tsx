import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Lato } from 'next/font/google'
import "../global-styles.css";

const latoRegular = Lato({
	subsets: ['latin'],
	weight: "400",
});

interface Props {
	children: ReactNode;
}

export const RootLayout = ({ children }: Props) => (
	<html lang="en" className={latoRegular.className}>
		<body>
			<Header />
			<main>{children}</main>
			<Footer />
		</body>
	</html>
);

export default RootLayout;

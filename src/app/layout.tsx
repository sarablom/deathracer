import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Lato } from "next/font/google";
import "../global-styles.css";
import ThemeProvider from "../context/ThemeContext";

const latoRegular = Lato({
	subsets: ["latin"],
	weight: "400",
});

interface Props {
	children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
	<html lang="en" className={latoRegular.className}>
		<body>
			<ThemeProvider>
				<Header />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</body>
	</html>
);

export default RootLayout;

import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Poppins } from "next/font/google";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

const poppinsRegular = Poppins({
	subsets: ["latin"],
	weight: "400",
});

interface Props {
	children: ReactNode;
}

const RootLayout = ({ children }: Props) =>  (
	<>
		<GlobalStyles />
		<html lang="en" className={poppinsRegular.className}>
			<ThemeProvider>
				<body>
					<Header />
					<main>{children}</main>
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	</>
);

export default RootLayout;

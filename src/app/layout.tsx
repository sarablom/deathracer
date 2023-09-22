import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Poppins } from "next/font/google";
import { ThemeProvider, ThemeTypes } from "../context/ThemeContext";
import StyledComponentsRegistry from "../lib/registry";

import "./styles.css";

const poppinsRegular = Poppins({
	subsets: ["latin"],
	weight: "400",
});

interface Props {
	children: ReactNode;
}

export const metadata = {
	title: "Deathracer",
	description: "Bandsite of the Gothenburg based band Dethracer.",
};

const RootLayout = ({ children }: Props) => {
	const savedTheme = cookies().get("savedTheme");
	const theme = savedTheme?.value || "light";

	return (
		<html lang="en" className={poppinsRegular.className}>
			<ThemeProvider initialTheme={theme as ThemeTypes}>
				<StyledComponentsRegistry>
					<body className={theme === "light" ? "" : "dark"}>
						<Header />
						<main>{children}</main>
						<Footer />
					</body>
				</StyledComponentsRegistry>
			</ThemeProvider>
		</html>
	);
};

export default RootLayout;

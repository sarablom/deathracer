import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Poppins } from "next/font/google";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider } from "../context/ThemeContext";

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
	const savedTheme = cookies().get("saved-theme");
	const theme = savedTheme?.value || "light";

	return (
		<>
			<GlobalStyles />
			<html lang="en" className={poppinsRegular.className}>
				<ThemeProvider>
					<body className={theme === "light" ? "" : "dark"}>
						<Header initialTheme={theme as "light" | "dark"} />
						<main>{children}</main>
						<Footer />
					</body>
				</ThemeProvider>
			</html>
		</>
	);
};

export default RootLayout;

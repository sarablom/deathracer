import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Poppins } from "next/font/google";
import { ThemeProvider, ThemeTypes } from "../context/ThemeContext";
import { CartProvider } from "../context/CartContext";

import { GlobalStyles } from "./GlobalStyles";
import StyledComponentsRegistry from "../lib/registry";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const poppinsRegular = Poppins({
	subsets: ["latin"],
	weight: "400",
});

interface Props {
	children: ReactNode;
}

export const metadata = {
	title: "Deathracer",
	description: "Bandsite of the Gothenburg based band Dethracer",
	metadataBase: new URL("https://deathracer.vercel.app/"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		title: "Deathracer",
		description: "Bandsite of the Gothenburg based band Dethracer.",
		url: "https://deathracer.vercel.app/",
		siteName: "Deathracer",
		images: [
			{
				url: "https://deathracer.vercel.app/images/logo.jpg",
				width: 800,
				height: 600,
			},
		],
		locale: "en_US",
		type: "website",
	},
};

const RootLayout = ({ children }: Props) => {
	const savedTheme = cookies().get("savedTheme");
	const theme = savedTheme?.value || "light";

	return (
		<html lang="en" className={poppinsRegular.className}>
			<ThemeProvider initialTheme={theme as ThemeTypes}>
      <CartProvider>
				<StyledComponentsRegistry>
					<GlobalStyles />
					<body className={theme === "light" ? "" : "dark"}>
						<Header />
						<main>{children}</main>
						<Footer />
					</body>
				</StyledComponentsRegistry>
        </CartProvider>
			</ThemeProvider>
		</html>
	);
};

export default RootLayout;

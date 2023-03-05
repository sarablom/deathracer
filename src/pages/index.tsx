import type { NextPage } from "next";
import Head from "next/head";
import CarLogo from "../components/svgs/CarLogo/CarLogo";

export const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Deathracer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CarLogo />
		</>
	);
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { MainHeading } from "../components/MainHeading";

export const Merch: NextPage = () => {
	return (
		<>
			<Head>
				<title>Deathracer --- Merch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainHeading text="Merch" />
			<p>Here you will soon be able to buy Deathracer merch</p>
		</>
	);
};

export default Merch;

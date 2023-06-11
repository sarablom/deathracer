import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { MainHeading } from "../components/MainHeading";

export const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Deathracer --- About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainHeading text="About" />
			<p>Content coming soon</p>
		</>
	);
};

export default About;

import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { MainHeading } from "../components/MainHeading";

export const Shows: NextPage = () => {
	return (
		<>
			<Head>
				<title>Deathracer --- Shows</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainHeading text="Shows" />
			<p>No upcoming events</p>
		</>
	);
};

export default Shows;

import type { NextPage } from "next";
import Head from "next/head";
import logo from "../../public/images/logo.jpg";
// import CarLogo from "../components/svgs/CarLogo/CarLogo";
import Image from "next/image";
import styled from "styled-components";

export const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Deathracer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ImageWrapper>
				<Image
					src={logo}
					alt="Deathracer logo - a Volvo 142 driven by a skeleton with the registration plate DEATH"
				/>
			</ImageWrapper>
		</>
	);
};

export default Home;

const ImageWrapper = styled.div`
	
	img {
		animation: drivinFromRight 1s ease-in forwards;
		width: 80%;
		max-width: 750px;
		height: fit-content;
		margin: 0;
	}

	@keyframes drivinFromRight {
		from {
			transform: translate(175px, -100px);
			opacity: 0;
		}

		to {
			transform: translate(35px, 15px);
			opacity: 1;
		}
	}
`;

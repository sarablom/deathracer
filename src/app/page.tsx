import logo from "../../public/images/logo.jpg";
import Image from "next/image";
import styles from "./styles.module.css";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer",
	description: "Information about the band Deathracer from Gothenburg, Sweden",
};

const Home: NextPage = () => {
	return (
		<Image
			className={styles.carLogo}
			src={logo}
			alt="Deathracer logo - a Volvo 142 driven by a skeleton with the registration plate DEATH"
		/>
	);
};

export default Home;

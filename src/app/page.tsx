import logo from "../../public/images/logo.jpg";
import { CarImage } from "./styles";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer",
	description: "Bandsite of Deathracer from Gothenburg, Sweden.",
};

const Home: NextPage = () => {
	return (
		<CarImage
			src={logo}
			alt="Deathracer logo - a Volvo 142 driven by a skeleton with the registration plate DEATH"
		/>
	);
};

export default Home;

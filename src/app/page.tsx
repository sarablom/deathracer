import logo from "../../public/images/logo.jpg";
import { CarImage } from "./StyledComponents";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer",
	description: "Information about the band Deathracer from Gothenburg, Sweden",
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

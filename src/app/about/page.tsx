import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- About",
};

const About: NextPage = () => {
	return (
		<>
			<MainHeading text="About" />
			<p>Content coming soon</p>
		</>
	);
};

export default About;

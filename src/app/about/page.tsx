import { MainHeading } from "../../components/MainHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- About",
};

export const About = () => {
	return (
		<>
			<MainHeading text="About" />
			<p>Content coming soon</p>
		</>
	);
};

export default About;

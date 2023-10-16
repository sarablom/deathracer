import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";
import { SocialMediaButtons } from "./components/SocialMediaButtons";

export const metadata: Metadata = {
	title: "Deathracer --- About",
};

const About: NextPage = () => {
	return (
		<>
			<MainHeading text="About" />
			<p>
				Gothenburg based band, playing a most hard to define music. Here for
				yourself at Spotify or Bandcamp.
			</p>
			<SocialMediaButtons />
		</>
	);
};

export default About;

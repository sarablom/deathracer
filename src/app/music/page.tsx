import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Music",
};

export const Music: NextPage = () => {
	return (
		<>
			<MainHeading text="Music" />
			<p>Content coming soon</p>
		</>
	);
};

export default Music;

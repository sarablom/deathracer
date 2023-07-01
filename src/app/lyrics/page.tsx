import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Lyrics",
};

const Lyrics: NextPage = () => {
	return (
		<>
			<MainHeading text="Lyrics" />
			<p>Content coming soon</p>
		</>
	);
};

export default Lyrics;

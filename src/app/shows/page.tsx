import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Shows",
};

export const Shows: NextPage = () => {
	return (
		<>
			<MainHeading text="Shows" />
			<p>No upcoming events</p>
		</>
	);
};

export default Shows;

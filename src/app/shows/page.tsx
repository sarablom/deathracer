import { MainHeading } from "../../components/MainHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Shows",
};

export const Shows = () => {
	return (
		<>
			<MainHeading text="Shows" />
			<p>No upcoming events</p>
		</>
	);
};

export default Shows;

import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Merch",
};

export const Merch: NextPage = () => {
	return (
		<>
			<MainHeading text="Merch" />
			<p>Here you will soon be able to buy Deathracer merch</p>
		</>
	);
};

export default Merch;

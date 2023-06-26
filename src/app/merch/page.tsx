import { MainHeading } from "../../components/MainHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deathracer --- Merch",
};

export const Merch = () => {
	return (
		<>
			<MainHeading text="Merch" />
			<p>Here you will soon be able to buy Deathracer merch</p>
		</>
	);
};

export default Merch;

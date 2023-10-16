import { MainHeading } from "../../components/MainHeading";
import { Metadata, NextPage } from "next";
import { MailLink } from "./styles";

export const metadata: Metadata = {
	title: "Deathracer --- Shows",
};

const Shows: NextPage = () => {
	return (
		<>
			<MainHeading text="Shows" />
			<p>No upcoming events</p>
			<p>
				Want to book us? Contact us at{" "}
				<MailLink href="mailto:deathracertheband@gmail.com">
					deathracertheband@gmail.com
				</MailLink>.
			</p>
		</>
	);
};

export default Shows;

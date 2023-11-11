import { Metadata, NextPage } from "next";
import Image from "next/image";
import { MainHeading } from "../../components/MainHeading";
import { MailLink, Paragraph, SubHeader, ImageWrapper } from "./styles";

export const metadata: Metadata = {
	title: "Deathracer --- Shows",
};

const Shows: NextPage = () => {
	return (
		<>
			<MainHeading text="Shows" />
			<section>
				<SubHeader>Upcoming shows</SubHeader>
				<Paragraph>No upcoming shows!</Paragraph>
				<p>Want to book us? Contact: </p>
				<MailLink href="mailto:deathracertheband@gmail.com">
					deathracertheband@gmail.com
				</MailLink>
				.
			</section>
			<section>
				<SubHeader>Previous shows</SubHeader>
				<ImageWrapper>
					<Image
						src="/images/show-poster-1.jpg"
						alt="Blood Prom"
            width={0}
            height={0}
            sizes="100%"
					/>
					<Image
						src="/images/show-poster-2.jpg"
						alt="Tung afton - andra sidan bron"
            width={0}
            height={0}
            sizes="100%"
					/>
				</ImageWrapper>
			</section>
		</>
	);
};

export default Shows;

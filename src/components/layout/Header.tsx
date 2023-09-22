import Image from "next/image";
import Link from "next/link";

import { Nav } from "../Nav";

import logo from "../../../public/images/death-logo.svg";
import { HeaderWrapper } from "./StyledComponents";

export const Header = () => (
	<HeaderWrapper>
		<Link href="/">
			<Image
				src={logo}
				alt="Deathracer logo - the word DEATH written in white againt black background"
				height={48}
			/>
		</Link>
		<Nav />
	</HeaderWrapper>
);

"use client";
import { Facebook } from "react-feather";
import { BandCampLogo } from "../../../components/svgs/BancCampLogo";
import { SpotifyLogo } from "../../../components/svgs/SpotifyLogo";
import styled from "styled-components";

export const SocialMediaButtons = () => {
	return (
		<ButtonsWrapper>
			<button
				onClick={() =>
					window.open(
						"https://open.spotify.com/artist/1Vhr0X4FgDzqk8s33DUWCz?si=wWJl7ts7R9a-13DwKBBbNw"
					)
				}
			>
				<SpotifyLogo />
			</button>
			<button
				onClick={() =>
					window.open("https://deathracer.bandcamp.com/album/skogsrysarn")
				}
			>
				<BandCampLogo />
			</button>
			<button
				onClick={() =>
					window.open("https://www.facebook.com/deathracertheband")
				}
			>
				<Facebook size={44} fill="var(--color-text)" stroke="none" />
			</button>
		</ButtonsWrapper>
	);
};

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin: 16px auto;

	button {
		border: none;
		background: transparent;
		cursor: pointer;

		svg {
			height: 44px;
			width: 44px;
		}
	}
`;

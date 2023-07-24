"use client";
import Image from "next/image";
import styled from "styled-components";

export const CarImage = styled(Image)`
	animation: drivinFromRight 500ms ease-in forwards;
	width: 80%;
	max-width: 750px;
	height: fit-content;

	@keyframes drivinFromRight {
		from {
			transform: translate(175px, -100px);
			opacity: 0;
		}

		to {
			transform: translate(35px, 15px);
			opacity: 1;
		}
	}
`;

"use client";
import styled from "styled-components";
import { ArrowUpCircle } from "react-feather";

export const LyricsWrapper = styled.div`
	display: flex;

	@media (max-width: 800px) {
		flex-direction: column-reverse;
	}
`;

export const LyricsList = styled.ol`
	list-style-type: none;
	width: 600px;

	li {
		margin-bottom: 32px;
		p {
			margin-bottom: 16px;
		}
	}
`;

export const SongList = styled.ol`
	flex: 1;
	list-style-type: none;
	margin-bottom: 32px;

	img {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 16px;
    border-radius: 8px;
	}

	a {
		color: inherit;
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

export const ToTopOfPageButton = styled.button`
	border: none;
	background: var(--color-whiteish);
	cursor: pointer;
`;

export const StyledArrowUpCircle = styled(ArrowUpCircle)`
	position: fixed;
	bottom: 32px;
	right: 32px;
	width: 44px;
	height: 44px;
`;

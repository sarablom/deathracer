"use client";
import styled from "styled-components";

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


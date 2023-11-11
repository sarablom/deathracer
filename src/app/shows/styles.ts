"use client";
import styled from "styled-components";

export const Paragraph = styled.p`
	margin-bottom: 16px;
`;

export const SubHeader = styled.h2`
	margin: 32px 0;
`;

export const MailLink = styled.a`
	color: var(--color-text);
	text-decoration: none;

	:hover {
		text-decoration: underline;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
  gap: 16px;
	height: 200px;
  width: 100%;

	img {
		height: 100%;
		width: auto;
	}
`;

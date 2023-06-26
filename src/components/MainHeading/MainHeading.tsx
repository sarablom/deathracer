"use client";
import React from "react";
import styled from "styled-components";

export const MainHeading = ({ text }: { text: string }) => {
	return <Heading>{text}</Heading>;
};

const Heading = styled.h1`
	text-align: center;
	margin-bottom: 32px;
	font-size: var(--font-size-xxl);
`;

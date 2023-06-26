"use client";
import styled from "styled-components";

type Props = {
	text: string;
};

/**
 * @description A component that renders a text that will only be visible on screen readers
 * @param text The text to be displayed
 */

export const VisuallyHidden = ({ text }: Props) => <Text>{text}</Text>;

const Text = styled.span`
	display: inline-block;
	position: absolute;
	overflow: hidden;
	clip: rect(0 0 0 0);
	height: 1;
	width: 1;
	margin: -1;
	padding: 0;
	border: 0;
`;

"use client";
import { FC } from "react";
import styled from "styled-components";

type Props = {
	message: string;
	isVisible: boolean;
	isSuccess?: boolean;
};

/**
 * @description An alert message component
 * @param message - the message you want to display to the user
 * @param isVisible - a boolean that indicates if the message should be visible in the DOM. If you don´t add a visible state, the component will never show, therefor it is not optional
 * @param isSuccess - an optional boolean that indicates if the message should be styled as a success message. The default styling is an error message
 */

export const AlertMessage: FC<Props> = ({ message, isVisible, isSuccess }) => {
	const classNameName = `${isVisible ? "" : "hidden"} ${
		isSuccess ? "success" : ""
	}`;

	return (
		<MessageContainer>
			<Message className={classNameName}>
				{isVisible && <p>{message}</p>}
			</Message>
		</MessageContainer>
	);
};

const MessageContainer = styled.div`
	min-height: 5rem;
`;

const Message = styled.p`
	margin: 24px auto;
	text-align: center;
	height: fit-content;
	max-width: 350px;
	width: fit-content;
	padding: 16px;
	font-weight: 700;
	color: var(--color-error);
	border: 4px solid var(--color-success);
	border-radius: 1.5rem;
	&.success {
		color: ${props => props.theme.color.foreground.positive};
		border: 4px solid ${props => props.theme.color.foreground.positive};
	}
	&.hidden {
		visibility: hidden;
	}
`;

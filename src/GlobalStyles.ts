"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
	--color-primary: #fa7978;
	--color-secondary: hsla(0, 0%, 35%, 0.2);
	--color-blackish: #4b4b4b;
	--color-grey: #d2d2d2;
	--color-whiteish: #fcfcfc;
	--color-error: #ef5d80;
	--color-warning: #efa35d;
	--color-success: hsla(190, 22%, 46%, 1);

	--font-size-s: clamp(0.8rem, 0.18vw + 0.66rem, 0.9rem);
	--font-size-base: clamp(0.88rem, 0.34vw + 0.79rem, 1.06rem);
	--font-size-m: clamp(1.09rem, 0.59vw + 0.95rem, 1.42rem);
	--font-size-l: clamp(1.37rem, 0.95vw + 1.13rem, 1.7rem);
	--font-size-xl: clamp(1.71rem, 1.47vw + 1.34rem, 2.2rem);
	--font-size-xxl: clamp(2.14rem, 2.22vw + 1.58rem, 2.8rem);
	--font-size-xxxl: clamp(2.67rem, 3.28vw + 1.85rem, 4rem);

	--max-width: 100rem;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}
* {
	margin: 0;
}
html,
body,
#__next {
	height: 100%;
}

#__next {
	isolation: isolate;
}

body {
	display: flex;
	flex-direction: column;
	font-size: var(--font-size-base);
	width: 100%;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	color: var(--color-blackish);
	background-color: var(--color-whiteish);
}

body.dark {
	background: var(--color-blackish);
	color: var(--color-whiteish);

	img,
	video {
		filter: grayscale(50%) opacity(90%);
	}
}

.page-wrapper {
	min-height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
	align-self: center;
	width: 100%;
	max-width: 1000px;
	padding: 2rem 1rem 0 1rem;
}

img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}
input,
button,
textarea,
select {
	font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}
`;

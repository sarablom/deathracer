import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        color: var(--color-blackish);
        background-color: var(--color-whiteish);
        font-size: var(--font-size-base);
        font-family: 'Cormorant SC', serif;
        width: 100%;
    }
`;
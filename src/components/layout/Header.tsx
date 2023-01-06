import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

export const Header: FC = () => {
    return (
        <HeaderWrapper>
            <NavWrapper>
                <Link href="/about">About</Link>
                <Link href="/music">Music</Link>
                <Link href="/shows">Shows</Link>
                <Link href="/merch">Merch</Link>
            </NavWrapper>
        </HeaderWrapper>
    );
};
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--color-secondary);
`;

const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    gap: 3rem;
    a {
        text-decoration: none;
        color: var(--color-blackish);
        cursor: pointer;
        &:hover {
            color: var(--color-whiteish);
            background: var(--color-secondary);
        }
    }
`;

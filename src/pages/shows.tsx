import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

export const Shows: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deathracer --- Shows</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About</h1>
            <p>No upcoming events</p>
        </>
    );
};

export default Shows;

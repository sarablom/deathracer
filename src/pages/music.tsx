import type { NextPage } from "next";
import Head from "next/head";
import { MainHeading } from "../components/MainHeading";

export const Music: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deathracer --- Music</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainHeading text="Music" />
            <p>Content coming soon</p>
        </>
    );
};

export default Music;

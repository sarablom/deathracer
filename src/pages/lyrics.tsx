import type { NextPage } from "next";
import Head from "next/head";
import { MainHeading } from "../components/MainHeading";

export const Lyrics: NextPage = () => {
    return (
        <>
            <Head>
                <title>Deathracer --- Lyrics</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainHeading text="Lyrics" />
            <p>Content coming soon</p>
        </>
    );
};

export default Lyrics;

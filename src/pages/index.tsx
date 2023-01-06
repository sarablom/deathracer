import type { NextPage } from "next";
import Head from "next/head";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectModalIsOpen, toggleModal } from "../store/slices/uiSlice";
import { Modal } from "../components/Modal";
import styled from "styled-components";

export const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    const modalIsVisible = useAppSelector(selectModalIsOpen);

    const toggleModalHandler = () => {
        dispatch(toggleModal());
    };

    return (
        <>
            <Head>
                <title>Deathracer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Deathracer</h1>
            {/* <button onClick={toggleModalHandler}>
                {modalIsVisible ? "Hide modal" : "Show modal"}
            </button>
            {modalIsVisible && (
                <Modal title="hej">
                    <p>hej hej</p>
                </Modal>
            )} */}
        </>
    );
};

export default Home;

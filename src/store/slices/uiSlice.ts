import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../";

const initialState = {
    modalIsOpen: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleModal: state => {
            state.modalIsOpen = !state.modalIsOpen;
        },
    },
});

export const { toggleModal } = uiSlice.actions;
export const selectModalIsOpen = (state: RootState) => state.ui.modalIsOpen;
export default uiSlice;

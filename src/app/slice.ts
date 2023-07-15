import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Characters } from "../components/type";

interface InitialStateType {
    charactersData: Characters
}

const initialState: InitialStateType = {
    charactersData: {characters: {results: []}}
}

export const characterDataSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getData: (state, action: PayloadAction<Characters>) => {
            state.charactersData = action.payload;
          },
    }
})

export const { getData } = characterDataSlice.actions
export default characterDataSlice.reducer
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isClicked: false,
}

export const selectOnClickSlice = createSlice({
  name: 'getStackIconsSlice',
  initialState,
  reducers: {
    selectedOnClick:(state,{payload}) => {
      state.isClicked = payload
    },
    removeSelected:(state,{payload}) => {
      state.isClicked = payload
    }
  },
})

export const {selectedOnClick, removeSelected} = selectOnClickSlice.actions

export default selectOnClickSlice.reducer

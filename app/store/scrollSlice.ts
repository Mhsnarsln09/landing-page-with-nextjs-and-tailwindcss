import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollState {
  targetId: string;
}

const initialState: ScrollState = {
  targetId: '',
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setTarget: (state, action: PayloadAction<string>) => {
      state.targetId = action.payload;
    },
  },
});

export const { setTarget } = scrollSlice.actions;
export default scrollSlice.reducer;

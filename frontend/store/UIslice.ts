import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { UITypes } from "../types";

export interface UIState {
  isMenuVisible: boolean;
  selectedFilters: string[]
  sort: UITypes.Option
}

const initialState: UIState = {
  isMenuVisible: false,
  selectedFilters: [],
  sort: {
    value: "random",
    label: "Random"
  }
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMenuVisible = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      if (state.selectedFilters?.find(item => item === action.payload)) {
        state.selectedFilters = state.selectedFilters.filter(item => item !== action.payload);
      } else {
        state.selectedFilters = [...state.selectedFilters, ...[action.payload]]
      }
    },
    resetFilter: (state, action: PayloadAction<void>) => {
      state.selectedFilters = [];
    },
    setSort: (state, action: PayloadAction<UITypes.Option>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  setMenuVisible,
  setFilter,
  resetFilter,
  setSort,
} = UISlice.actions;

export const selectIsMenuVisible = (state: RootState) => state.UI.isMenuVisible;
export const selectSelectedFilters = (state: RootState) => state.UI.selectedFilters;
export const selectSort = (state: RootState) => state.UI.sort;

export default UISlice.reducer;

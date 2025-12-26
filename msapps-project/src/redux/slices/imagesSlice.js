import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create async action to fetch data (default is by date)
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async ({ category, page, sortBy }) => {
    const res = await fetch(
      `http://localhost:3000/api/images?category=${category}&page=${page}&sort=${sortBy}`
    );
    const data = await res.json();
    return data;
  }
);

//create async action to fetch data sorted by id
export const fetchImagesSortedById = createAsyncThunk(
  "images/fetchImagesSortedById",
  async ({ category, page }) => {
    const res = await fetch(
      `http://localhost:3000/api/images/sortById?category=${category}&page=${page}`
    );
    const data = await res.json();
    return data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    data: [],
    category: "sport",
    page: 1,
    loading: false,
    sortBy: "popular",
  },
  reducers: {
    setCategory(state, action) {
      //when setting category also set the page to 1
      state.category = action.payload;
      state.page = 1;
    },
    nextPage(state) {
      state.page++;
    },
    prevPage(state) {
      state.page--;
    },
    setSortBy(state, action) {
      if (action.payload !== state.sortBy) state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //add cases to the fetch data async action
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; //when done save the data in the state
      })
      .addCase(fetchImages.rejected, (state) => {
        state.loading = false;
      })
      //add cases to the fetch data sorted by id async action
      .addCase(fetchImagesSortedById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImagesSortedById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; //when done save the data in the state
      })
      .addCase(fetchImagesSortedById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setCategory, nextPage, prevPage, setSortBy } =
  imagesSlice.actions;
export default imagesSlice.reducer;

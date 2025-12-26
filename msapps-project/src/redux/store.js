import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./slices/imagesSlice";

export default configureStore({
  reducer: {
    images: imagesReducer,
  },
});

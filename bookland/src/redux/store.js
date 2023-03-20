import {configureStore} from "@reduxjs/toolkit";
import bannerSlices from "../slide/banner.slide";
const store = configureStore({reducer: {
    banner: bannerSlices.reducer,
}})
export default store;
import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice.js'
import courseSliceReducer from './Slices/CourseSlice.js';
import razorpaySliceReducer from './Slices/RazorpaySlice.js';
import statSliceReducer from './Slices/StatSlice.js';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: razorpaySliceReducer,
        stat: statSliceReducer
    },
    devTools: true
})

export default store;
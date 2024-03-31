import { createAsyncThunk, createSlice } from  "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const response = axiosInstance.get("/courses")
        toast.promise(response, {
            loading: "loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get the courses"
        });

        return (await response).data.courses;

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const createNewCourse = createAsyncThunk("/course/create", async (data) => {
    try {
        let formdata = new FormData();
        formdata.append("title", data?.title);
        formdata.append("description", data?.description);
        formdata.append("category", data?.category);
        formdata.append("createdBy", data?.createdBy);
        formdata.append("thumbnail", data?.thumbnail);

        const response = axiosInstance.post("/courses", formdata);
        toast.promise(response, {
            loading: "Creating new course",
            success: "Course created successfully",
            error: "Failed to create course"
        });

        return (await response).data

    } catch (error) {
        toast.error(error?.respomse?.data?.message)
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if(action.payload) {
                console.log(action.payload); 
                state.courseData = {...action.payload}
            }
        })
    }
})

export default courseSlice.reducer;
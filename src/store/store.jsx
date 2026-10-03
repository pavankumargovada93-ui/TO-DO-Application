import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "../Slicers/task-slicer";

export const store=configureStore({
    reducer:TaskSlicer
})
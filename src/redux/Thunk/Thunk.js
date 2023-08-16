import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApiCarsCatalog } from "../../services/appiCars";

export const getCarsCatalogThunk = createAsyncThunk('cars/getAll', ()=>getApiCarsCatalog())
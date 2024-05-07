import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import globalUrlApi from "../../utils/globalUrlApi";
import axios from "axios";

export const getListBarang = createAsyncThunk("barang/getListBarang", async () => {
    const response = axios.get(globalUrlApi.getBarang)
    return (await response).data
})

export const postBarang = createAsyncThunk('barang/postBarang', async(data) => {
    const response = await axios.post(globalUrlApi.insertBarang, data)
    return response.data
})

export const BarangSlice = createSlice({
    name : 'barang',
    initialState : {
        isLoading : false,
        barang : []
    },
    extraReducers: (builder) => {
        builder.addCase(getListBarang.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getListBarang.fulfilled, (state, action) => {
            state.isLoading = false
            state.barang = action.payload.data
        }).addCase(getListBarang.rejected, (state) => {
            state.isLoading = false
        });
    }
})

export default BarangSlice.reducer
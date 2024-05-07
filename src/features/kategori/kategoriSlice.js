import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import globalUrlApi from "../../utils/globalUrlApi";

export const getListKategori = createAsyncThunk('kategori/getListKategori', async () => {
    const response = await axios.get(globalUrlApi.getKategori)
    return response.data
})

export const postKategori = createAsyncThunk('kategori/postKategori', async(data) => {
    const response = await axios.post(globalUrlApi.insertKategori, data)
    return response.data
})

export const deleteKategori = createAsyncThunk('kategori/deleteKategori', async(id) => {
    var url = `${globalUrlApi.deleteKategori}?kategoriId=${id}`
    const response = await axios.get(url)
    return response.data
})

export const updateKategori = createAsyncThunk('kategori/updateKategori', async(data) => {
    const response = await axios.post(globalUrlApi.updateKategori, data)
    return response.data
})

export const KategoriSlice = createSlice({
    name : 'kategori',
    initialState : {
        isLoading : false,
        kategoriList : [],
    },
    extraReducers : (builder) => {
        builder.addCase(getListKategori.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getListKategori.fulfilled, (state, action) => {
            state.isLoading = false
            state.kategoriList = action.payload.data
        }).addCase(getListKategori.rejected, (state, action) => {
            state.isLoading = false
        });
    }
})

export const {}  = KategoriSlice.actions
export default KategoriSlice.reducer
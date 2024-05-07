import { createAsyncThunk, createSlice, isPlainObject } from "@reduxjs/toolkit";
import axios from "axios";
import globalUrlApi from "../../utils/globalUrlApi";

export const getListHistoryTransaksi = createAsyncThunk("transaksi/getListHistoryTransaksi", async(data) => {
    var url = `${globalUrlApi.getTransaksi}?startDate=${data.dateValue.startDate}&endDate=${data.dateValue.endDate}`
    const response = axios.get(url)
    return (await response).data
})

export const postHistoryTransaksi = createAsyncThunk("transaksi/postHistoryTransaksi", async(data) => {
    const response = axios.post(globalUrlApi.postTransaksi, data)
    return (await response).data
})

export const TransaksiSlice = createSlice({
    name: 'transaksi',
    initialState : {
        isLoading : false,
        transaksi : []
    },
    extraReducers: (builder) => {
        builder.addCase(getListHistoryTransaksi.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getListHistoryTransaksi.fulfilled, (state, action) => {
            state.isLoading = false
            state.transaksi = action.payload.data
        }).addCase(getListHistoryTransaksi.rejected, (state) => {
            state.isLoading = false
        });
    }
})
export default TransaksiSlice.reducer
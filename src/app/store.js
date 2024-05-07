import { configureStore } from "@reduxjs/toolkit";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import modalSlice from "../features/common/modalSlice";
import headerSlice from "../features/common/HeaderSlice";
import BarangSlice from "../features/barang/BarangSlice";
import kategoriSlice from "../features/kategori/kategoriSlice";
import TransaksiSlice from "../features/history_transaksi/HistoryTransaksiSlice";


const combinedReducer = {
    rightDrawer : rightDrawerSlice,
    modal : modalSlice,
    header : headerSlice,
    barang : BarangSlice,
    kategori : kategoriSlice,
    transaksi: TransaksiSlice,
}
export default configureStore({
    reducer : combinedReducer,
})
import { lazy } from "react"

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Barang = lazy(() => import('../pages/protected/BarangPages'))
const Kategori = lazy(() => import('../pages/protected/KategoriPages'))
const HistoryTransaksi = lazy(() => import('../pages/protected/HistoryTransaksiPages'))

const routes = [
    {
        path : '/',
        component : Dashboard
    },
    {
        path : '/kategori',
        component : Kategori
    },
    {
        path : '/barang',
        component : Barang,
    },
    {
        path : '/history-transaksi',
        component : HistoryTransaksi,
    }
]

export default routes
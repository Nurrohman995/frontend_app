import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListHistoryTransaksi } from "./HistoryTransaksiSlice"
import TitleCard from "../../components/Cards/TitleCards"
import { openModal } from "../common/modalSlice"
import { MODAL_BODY_TYPES } from "../../utils/globalContantUtil"
import SearchBar from "../../components/Input/Searchbar"
import Datepicker from "react-tailwindcss-datepicker"

const TopButtonAddNew = ({applySearch, removeFilter}) => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("")
    const openNewModal = () => {
        dispatch(openModal({title : 'Tambah transaksi baru', bodyType: MODAL_BODY_TYPES.TRANSAKSI_ADD_NEW}))
    }
    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openNewModal()}>Tambah</button>
        </div>
    )
}


const HistoryTransaksi = () => {
    const dispatch = useDispatch()
    const {transaksi} = useSelector((state) => state.transaksi)
    const [dateValue, setDateValue] = useState({ 
        startDate: '',
        endDate: '',
    }); 

    useEffect(() => {
        dispatch(getListHistoryTransaksi())
    }, [])
    
    const handleDatePickerValueChange = (newValue) => {
        setDateValue(newValue); 
    }

    useEffect(() => {
        dispatch(getListHistoryTransaksi({dateValue}))
    }, [dateValue])

    return (
        <>
            <TitleCard title="History Transaksi" topMargin="mt-2"TopSideButtons={<TopButtonAddNew />} >
            <Datepicker 
                containerClassName="w-72" 
                value={dateValue} 
                theme={"dark"}
                inputClassName="input input-bordered w-72" 
                popoverDirection={"down"}
                toggleClassName="invisible"
                onChange={handleDatePickerValueChange} 
                showShortcuts={true} 
                primaryColor={"white"} 
            />
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama Barang</th>
                                <th>Stok</th>
                                <th>Jumlah Terjual</th>
                                <th>Tanggal Transaksi</th>
                                <th>Jenis Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transaksi && transaksi.map((b, k) => {
                                    return <tr key={k}>
                                        <td>{k+1}</td>
                                        <td>{b.barang_nama}</td>
                                        <td>{b.barang_stok}</td>
                                        <td>{b.historytransaksi_terjual}</td>
                                        <td>{b.historytransaksi_tanggal}</td>
                                        <td>{b.kategori_barang}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard >
        </>
    )
}

export default HistoryTransaksi

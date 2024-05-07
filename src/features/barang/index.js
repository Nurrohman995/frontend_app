import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListBarang } from "./BarangSlice"
import TitleCard from "../../components/Cards/TitleCards"
import { MODAL_BODY_TYPES } from "../../utils/globalContantUtil"
import { openModal } from "../common/modalSlice"
import SearchBar from "../../components/Input/Searchbar"

const TopButtonAddNew = ({applySearch, removeFilter}) => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState("")
    const openNewModal = () => {
        dispatch(openModal({title : 'Tambah barang baru', bodyType: MODAL_BODY_TYPES.BARANG_ADD_NEW}))
    }
    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openNewModal()}>Tambah</button>
        </div>
    )
}

const Barang = () => {
    const dispatch = useDispatch()
    const {barang} = useSelector((state) => state.barang)
    
    useEffect(() => {
        dispatch(getListBarang())
    }, [])

    return (
        <>
            <TitleCard title="Barang" topMargin="mt-2" TopSideButtons={<TopButtonAddNew />} >
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama Barang</th>
                                <th>Stok</th>
                                <th>Kategori</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                barang && barang.map((b, k) => {
                                    return <tr key={k}>
                                        <td>{k+1}</td>
                                        <td>{b.barang_nama}</td>
                                        <td>{b.barang_stok}</td>
                                        <td>{b.kategori_nama}</td>
                                        <td>{b.created_at}</td>
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

export default Barang
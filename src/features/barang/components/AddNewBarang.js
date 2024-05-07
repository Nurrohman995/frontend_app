import { useEffect, useState } from "react"
import InputText from "../../../components/Input/InputText"
import { showNotification } from "../../common/HeaderSlice"
import { useDispatch, useSelector } from "react-redux"
import { getListKategori } from "../../kategori/kategoriSlice"
import { getListBarang, postBarang } from "../BarangSlice"

const INITIAL_BARANG = {
    nama_barang : "",
    jumlah_stok : "",
}

const AddNewBarang = ({closeModal}) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_BARANG)
    const [kategoriObj, setKategoriObj] = useState(null)
    const {kategoriList} = useSelector((state) => state.kategori)

    useEffect(() => {
        dispatch(getListKategori())
    }, [])

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    const setDataKategori = (updateType) => {
        setKategoriObj(updateType.target.value)
    }

    const handleTambahBarang = () => {
        if(leadObj.nama_barang.trim() === "")return setErrorMessage("Nama barang harus diisi!")
        else if(leadObj.jumlah_stok.trim() === "")return setErrorMessage("Jumlah stok harus diisi!")
        else if(kategoriObj === null) return setErrorMessage('Kategori harus dipilih!')
        else{
            let newBarang = {
                'barang_nama' : leadObj.nama_barang,
                'barang_stok' : leadObj.jumlah_stok,
                'kategori_id' : kategoriObj
            }

            dispatch(postBarang(newBarang)).then((_) => {
                dispatch(getListBarang())
            })
            closeModal()
        }
    }

    return (
        <>
        <InputText type="text" defaultValue={leadObj.nama_barang} updateType="nama_barang" containerStyle="mt-4" labelTitle="Nama Barang" updateFormValue={updateFormValue}/>
        <InputText type="number" defaultValue={leadObj.jumlah_stok} updateType="jumlah_stok" containerStyle="mt-4" labelTitle="Jumlah Stok" updateFormValue={updateFormValue}/>
        <div className="form-control w-full mt-4">
            <label for="" className="label">
                <span className="label-text text-base-content">Kategori</span>
            </label>
            <select defaultValue={leadObj.kategori} onChange={setDataKategori} name="kategori" className="input input-bordered w-full">
                <option value="" selected disabled>Pilih kategori</option>
                {
                    kategoriList.map((kt) => {
                        return <option value={kt.kategori_id}>{kt.kategori_nama}</option>
                    })
                }
            </select>
        </div>
        <p className={`text-center  text-error mt-16`}>{errorMessage}</p>
        <div className="modal-action">
            <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
            <button  className="btn btn-primary px-6" onClick={() => handleTambahBarang()}>Save</button>
        </div>
        </>
    )
}

export default AddNewBarang
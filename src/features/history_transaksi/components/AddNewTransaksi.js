import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../common/modalSlice";
import { useEffect, useState } from "react";
import { getListBarang } from "../../barang/BarangSlice";
import InputText from "../../../components/Input/InputText";
import { getListHistoryTransaksi, postHistoryTransaksi } from "../HistoryTransaksiSlice";

const INITIAL_TRANSAKSI = {
    jumlah_terjual : "",
    tanggal_transaksi : "",
}

const AddNewTransaksi = ({closeModal}) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_TRANSAKSI)
    const [barangObj, setBarangObj] = useState(null)
    const {barang} = useSelector((state) => state.barang)

    useEffect(() => {
        dispatch(getListBarang())
    }, [])

    const setDataBarang = (u) => {
        setBarangObj(u.target.value)
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    const handleInsertTransaksi = () => {
        if(barangObj === null) return setErrorMessage('Barang harus dipilih!')
        else if(leadObj.jumlah_terjual.trim() === "")return setErrorMessage("Kolom terjual harus diisi!")
        else if(leadObj.tanggal_transaksi.trim() === "")return setErrorMessage("Kolom tanggal harus diisi!")
        else{
            let newTransaction = {
                'barang_id' : barangObj,
                'jumlah_terjual' : leadObj.jumlah_terjual,
                'tanggal_transaksi' : leadObj.tanggal_transaksi
            }

            dispatch(postHistoryTransaksi(newTransaction)).then((_) => {
                dispatch(getListHistoryTransaksi())
            })
            closeModal()
        }
    }

    return (
        <>
        <div className="form-control w-full mt-4">
            <label for="" className="label">
                <span className="label-text text-base-content">Nama Barang</span>
            </label>
            <select onChange={setDataBarang} name="barang" className="input input-bordered w-full">
                <option value="" selected disabled>Pilih barang</option>
                {
                    barang.map((kt) => {
                        return <option value={kt.barang_id}>{kt.barang_nama}</option>
                    })
                }
            </select>
        </div>
        <InputText type="number" defaultValue={leadObj.jumlah_terjual} updateType="jumlah_terjual" containerStyle="mt-4" labelTitle="Jumlah Terjual" updateFormValue={updateFormValue}/>
        <InputText type="date" defaultValue={leadObj.tanggal_transaksi} updateType="tanggal_transaksi" containerStyle="mt-4" labelTitle="Tanggal Transaksi" updateFormValue={updateFormValue}/>
        <p className={`text-center  text-error mt-16`}>{errorMessage}</p>
        <div className="modal-action">
            <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
            <button  className="btn btn-primary px-6" onClick={() => handleInsertTransaksi()}>Save</button>
        </div>
        </>
    )
}

export default AddNewTransaksi
import { useEffect, useState } from "react"
import InputText from "../../../components/Input/InputText"
import { showNotification } from "../../common/HeaderSlice"
import { useDispatch, useSelector } from "react-redux"
import { getListKategori, postKategori } from "../../kategori/kategoriSlice"

const INITIALKATEGORI = {
    nama_kategori : "",
}

const AddNewKategori = ({closeModal}) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIALKATEGORI)

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    const handleTambahBarang = () => {
        if(leadObj.nama_kategori.trim() === "")return setErrorMessage("Nama kategori harus diisi!")
        else{
            let kategoriData = {
                "nama_kategori": leadObj.nama_kategori
            }
            dispatch(postKategori(kategoriData)).then((_)=> {
                dispatch(getListKategori())
            })
            closeModal()
        }
    }

    return (
        <>
        <InputText type="text" defaultValue={leadObj.nama_kategori} updateType="nama_kategori" containerStyle="mt-4" labelTitle="Nama Kategori" updateFormValue={updateFormValue}/>
        <p className={`text-center  text-error mt-16`}>{errorMessage}</p>
        <div className="modal-action">
            <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
            <button  className="btn btn-primary px-6" onClick={() => handleTambahBarang()}>Save</button>
        </div>
        </>
    )
}

export default AddNewKategori
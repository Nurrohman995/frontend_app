import { useEffect, useState } from "react"
import InputText from "../../../components/Input/InputText"
import { useDispatch, useSelector } from "react-redux"
import { getListKategori, postKategori, updateKategori } from "../../kategori/kategoriSlice"


const EditKategori = ({closeModal, extraObject}) => {
    const INITIALKATEGORI = {
        nama_kategori : extraObject.kategori_nama,
    }
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
                "id" : extraObject.kategori_id,
                "nama_kategori": leadObj.nama_kategori
            }
            dispatch(updateKategori(kategoriData)).then((_)=> {
                dispatch(getListKategori())
            })
            closeModal()
        }
    }

    return (
        <>
        <InputText type="text" defaultValue={extraObject.kategori_nama} updateType="nama_kategori" containerStyle="mt-4" labelTitle="Nama Kategori" updateFormValue={updateFormValue}/>
        <p className={`text-center  text-error mt-16`}>{errorMessage}</p>
        <div className="modal-action">
            <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
            <button  className="btn btn-primary px-6" onClick={() => handleTambahBarang()}>Save</button>
        </div>
        </>
    )
}

export default EditKategori
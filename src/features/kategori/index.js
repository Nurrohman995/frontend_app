import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteKategori, getListKategori } from "./kategoriSlice"
import TitleCard from "../../components/Cards/TitleCards"
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid"
import Swal from "sweetalert2"
import { MODAL_BODY_TYPES } from "../../utils/globalContantUtil"
import { openModal } from "../common/modalSlice"


const TopButtonAddNew = () => {
    const dispatch = useDispatch()
    const openNewModal = () => {
        dispatch(openModal({title : 'Tambah kategori baru', bodyType: MODAL_BODY_TYPES.KATEGORI_ADD_NEW}))
    }
    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openNewModal()}>Tambah</button>
        </div>
    )
}

const Kategori = () => {
    const dispatch = useDispatch()
    const {kategoriList} = useSelector((state) => state.kategori)

    useEffect(() => {
        dispatch(getListKategori())
    }, [])

    const handleDelete = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteKategori(data.kategori_id)).then((_) => {
                    dispatch(getListKategori())
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                })
            }
        });
    }

    return (
        <>
            <TitleCard title="Kategori" topMargin="mt-2" TopSideButtons={<TopButtonAddNew />}>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama Kategori</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                kategoriList && kategoriList.map((kat, key) => {
                                    return <tr key={key}>
                                        <td>{key +1}</td>
                                        <td>{kat.kategori_nama}</td>
                                        <td>
                                            <button className="btn btn-square btn-ghost" onClick={(e) => {
                                                e.preventDefault()
                                                handleDelete(kat)
                                            }}><TrashIcon className="w-5"/></button>
                                            <button className="btn btn-square btn-ghost" onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(openModal({title : 'Edit kategori', bodyType: MODAL_BODY_TYPES.KATEGORI_EDIT, extraObject: kat}))
                                            }}><PencilIcon className="w-5"/></button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Kategori
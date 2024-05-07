import { useEffect } from 'react'
// import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import { MODAL_BODY_TYPES } from '../utils/globalContantUtil'
import AddNewBarang from '../features/barang/components/AddNewBarang'
import AddNewKategori from '../features/kategori/components/AddNewKategori'
import EditKategori from '../features/kategori/components/EditKategori'
import AddNewTransaksi from '../features/history_transaksi/components/AddNewTransaksi'
// import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'


function ModalLayout(){
    const {isOpen, bodyType, size, extraObject, title} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }
    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

                {
                    {
                            [MODAL_BODY_TYPES.BARANG_ADD_NEW] : <AddNewBarang closeModal={close} extraObject={extraObject}/>,
                            [MODAL_BODY_TYPES.KATEGORI_ADD_NEW] : <AddNewKategori closeModal={close} extraObject={extraObject}/>,
                            [MODAL_BODY_TYPES.KATEGORI_EDIT] : <EditKategori closeModal={close} extraObject={extraObject}/>,
                            [MODAL_BODY_TYPES.TRANSAKSI_ADD_NEW] : <AddNewTransaksi closeModal={close} extraObject={extraObject}/>,
                            // [MODAL_BODY_TYPES.CONFIRMATION] : <ConfirmationModalBody extraObject={extraObject} closeModal={close}/>,
                            [MODAL_BODY_TYPES.DEFAULT] : <div></div>
                    }[bodyType]
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout
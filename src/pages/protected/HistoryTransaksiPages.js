import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/HeaderSlice'
import HistoryTransaksi from '../../features/history_transaksi'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "History Transaksi"}))
      }, [])


    return(
        <HistoryTransaksi />
    )
}

export default InternalPage
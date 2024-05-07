import { useDispatch } from "react-redux"
import Barang from "../../features/barang"
import { useEffect } from "react"
import { setPageTitle } from "../../features/common/HeaderSlice"

const BarangPages = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Barang"}))
      }, [])

    return (
        <Barang />
    )
}

export default BarangPages
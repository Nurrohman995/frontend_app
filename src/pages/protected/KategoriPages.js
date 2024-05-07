import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/HeaderSlice'
import Kategori from '../../features/kategori'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Kategori"}))
      }, [])


    return(
        <Kategori />
    )
}

export default InternalPage
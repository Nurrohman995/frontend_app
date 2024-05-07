import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../../features/dashboard/index'
import { setPageTitle } from '../../features/common/HeaderSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}))
      }, [])


    return(
        <Dashboard />
    )
}

export default InternalPage
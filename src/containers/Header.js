import { Bars3Icon, BellIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid"
import { NavLink, Link } from "react-router-dom"
import { openRightDrawer } from "../features/common/rightDrawerSlice"
import { useDispatch, useSelector } from "react-redux"
import { RIGHT_DRAWER_TYPES } from '../utils/globalContantUtil'

const Header = () => {
    const {pageTitle} = useSelector(state => state.header)

    return (
        <>
            <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
                        <Bars3Icon className="h-5 inline-block w-5"/>
                    </label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>
                <div className="flex-none ">
                    <label className="swap ">
                        <input type="checkbox"/>
                        {/* <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 "+(currentTheme === "dark" ? "swap-on" : "swap-off")}/>
                        <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 "+(currentTheme === "light" ? "swap-on" : "swap-off")} /> */}
                    </label>
                </div>
            </div>

        </>
    )
}

export default Header
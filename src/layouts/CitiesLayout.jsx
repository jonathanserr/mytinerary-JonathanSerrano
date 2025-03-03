import React from 'react'
import { Outlet } from "react-router-dom";


function CitiesLayout() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CitiesLayout
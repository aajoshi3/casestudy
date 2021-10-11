import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const CustomNavbarRouting = () => {
    return (
        <BrowserRouter>

        <div>
        <CustomNavbar />
        {routing}

        </div>
        </BrowserRouter>
    )
}

export default CustomNavbarRouting

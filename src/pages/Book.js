import { React } from 'react'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function Book(props) {
    return (
        <>
            <Header />
            <>
                <Outlet />
            </>
        </>
    )
}

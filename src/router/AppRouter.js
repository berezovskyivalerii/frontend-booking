import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StartPage } from '../pages/Start'
import { Profile } from '../pages/Profile'
import { Main } from '../pages/Home'
import { AccountSection, PaymentSection,TravelSection,NewslettersSection,SecuritySection } from '../pages/Profile'
import { Hotel } from '../pages/Hotel'

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage />,
        children: [
            {
                index: true,
                element: <Main />,
            },
        ],
    },
    {
        path: '/profile', 
        element: <Profile />,
        children: [
            { index: true, element: <AccountSection /> },
            { path: 'account', element: <AccountSection /> },
            { path: 'payment', element: <PaymentSection /> },
            { path: 'travel', element: <TravelSection /> },
            { path: 'newsletters', element: <NewslettersSection /> },
            { path: 'security', element: <SecuritySection /> },
        ],
    },
    {
        path: '/hotel',
        element: <Hotel />,
    },
])

export function AppRouter() {
    return <RouterProvider router={router} />
}

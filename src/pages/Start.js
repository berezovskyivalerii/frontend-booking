import React from 'react';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

export function StartPage(props) {
    return (
        <div>
            <Header />
            <NavigationBar url="./images/bg-nav.jpg" />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

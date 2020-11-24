import React from 'react';
import Navbar from '../modules/NavBar';
import SideBar from '../modules/SideBar';
import Footer from '../modules/Footer';
import MainContent from './content';
//React-redux
import { useSelector } from 'react-redux';

function DashboardComponents() {

    let { isHeader } = useSelector((state) => state.globalReducer)

    return (
        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                {isHeader ? <Navbar /> : ""}
                <SideBar />
                <MainContent />
                <Footer />
            </div>
        </div>
    )
};

export default DashboardComponents;
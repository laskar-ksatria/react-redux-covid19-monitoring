import React from 'react';
//components
import Header from './header';
import Dashboard from './dashboard';
import { F_GET_ALL, F_GET_DAILY_REPORT } from '../stores'; 
import { useDispatch } from 'react-redux';

function Layout() {

    let dispatch = useDispatch();

    const getGlobalData = () => F_GET_ALL(dispatch);

    const getDailyReport = () => F_GET_DAILY_REPORT(dispatch);

    React.useEffect(getGlobalData, []);
    React.useEffect(getDailyReport, []);

    return (
        <>
            <Header />
            <Dashboard />
        </>
    )
};

export default Layout;
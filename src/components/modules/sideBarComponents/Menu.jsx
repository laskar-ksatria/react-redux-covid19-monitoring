import React from 'react';
//components
import ListSideBar from './List';
//Sidebar list data
import { SideBarList } from '../../../stores'; 

function Menu() {

    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {SideBarList.map((item, index) => {
                    return <ListSideBar key={index} title={item.title} url={item.url} iname={item.iname} />
                })}
            </ul>
        </nav>
    )
};

export default Menu;
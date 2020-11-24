import React from 'react';
import Menu from './sideBarComponents/Menu';

function SideBar() {
    return (
        <aside className="main-sidebar sidebar-light elevation-4" style={{background: '#f4f4f2', boxShadow: 'none'}}>
            {/* SIDEBAR-HEADER --------------------------------------- */}
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        </div>
                        <div className="info">
                            <div style={{fontWeight: '700', }} className="d-block">Home</div>
                        </div>
                    </div>
                </div>
            {/* SIDEBAR-HEADER --------------------------------------- */}

            {/* MENU ------------------------------------------ */}
                <Menu />
            {/* MENU ------------------------------------------ */}

        </aside>
    )
};

export default SideBar;
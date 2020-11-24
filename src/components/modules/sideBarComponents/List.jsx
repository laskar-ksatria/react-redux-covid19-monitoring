import React from 'react';
import { Link } from 'react-router-dom';

function List({ title, url, iname }) {
    return (
        <Link to={url}>
            <div className={`nav-item has-treeview`} style={{cursor: 'pointer'}}>
                <div className="nav-link" style={{color: "#495464", fontWeight: '700', textDecoration: 'none'}}>
                    <i className={`nav-icon ${iname}`}></i>
                        <p style={{marginLeft: '10px'}}>
                            {title}
                        </p>
                </div>
            </div>
        </Link>
    )
};

export default List;
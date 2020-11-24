import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_COUNTRY, F_GET_COUNTRY_DATA, SET_COUNTRY_LOADING } from '../../stores';

function Navbar() {

    let { countries } = useSelector(state => state.countryReducer);
    let dispatch = useDispatch();

    const handleChange = e => {
        console.log(e.target.value);
        dispatch({type: SET_COUNTRY_LOADING, data: true});
        setTimeout(() => {
            F_GET_COUNTRY_DATA(dispatch, e.target.value);
            dispatch({type: SET_COUNTRY, data: e.target.value});
        }, 1000)
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav mb-10">
                <li className="nav-item d-none d-sm-inline-block">
                    {countries ? 
                        <>
                            <select className="form-control" onChange={handleChange}>
                                <option value="">Choose country</option>
                                {countries.map((item, index) => {
                                    return <option key={index} value={item.iso3}>{item.name}</option>
                                })}
                            </select>
                        </> 
                            : 
                        <>
                            <select className="form-control">
                                <option value="">Waiting...</option>
                            </select>
                        </>
                    }
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
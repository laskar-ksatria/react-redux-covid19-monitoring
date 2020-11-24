import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopContent from './TopContent';
import MiddleContent from './MiddleContent';
import DefaultContent from './DefaultContent';
import Loading from './Loading';
import { F_GET_COUNTRIES } from '../../../../stores';

function CountryContent() {

    let dispatch = useDispatch();
    let { countries, countryData, countryLoading } = useSelector(state => state.countryReducer);

    const getCountries = () => {
        if (!countries) {
            F_GET_COUNTRIES(dispatch)
        };
    };

    React.useEffect(getCountries, []);
    React.useEffect(() => dispatch({type: 'SET_HEADER', data: true}), []);
    
    return (
        <div className="content-wrapper" style={{minHeight: '85vh'}}>
            <section className="content">
                <div className="container-fluid">
                    {countryLoading ? <Loading /> : 
                        <>
                            <TopContent />
                            {countryData ? <MiddleContent /> : <DefaultContent />}
                        </>
                    }
                </div>
            </section>
        </div>
    )
};

export default CountryContent;
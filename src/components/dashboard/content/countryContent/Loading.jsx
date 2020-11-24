import React from 'react';
import CovidLogo from '../../../../assets/covid19.png';

function CountryLoading() {

    return (
        <div style={{width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <img className="rotate" src={CovidLogo} alt="CovidLogo" width="200" />
                <h3 style={{textAlign: 'center'}}>Please wait...</h3>
            </div>
        </div>
    );
};

export default CountryLoading;

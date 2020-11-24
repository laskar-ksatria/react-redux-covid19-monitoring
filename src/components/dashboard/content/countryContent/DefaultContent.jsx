import React from 'react';
import ChooseLogo from '../../../../assets/choose.svg';

function DefaultContent() {
    return (
        <div style={{width: '100%', height: '20vh',display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginTop: '230px'}}>
                <img src={ChooseLogo} width="200" />
                <h4 style={{textAlign: 'center', marginTop: '10px', color: 'gray'}}>
                    Please, choose a country..
                </h4>
            </div>
        </div>
    )
};

export default DefaultContent;
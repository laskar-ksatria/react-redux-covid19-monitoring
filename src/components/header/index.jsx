import React from 'react';
import CovidLogo from '../../assets/covid19.png';
import Robocop from '../../assets/robocop.jpg';


function HeaderComponents() {

    return (
       <nav className="header bg-navy">
           <div className="header-content">
                <div className="header-left">
                    <img src={CovidLogo} width="50" />
                    <span style={{marginLeft: '5px', fontWeight: 'bold'}}>Covid-19 Monitor</span>
                </div>
                <div className="header-right">
                    <div className="header-right-com">
                </div>
                    <div className="header-right-com">
                        <img src={Robocop} width="40" className="user-image" />
                    </div>
                </div>
           </div>
       </nav>
    )
};

export default HeaderComponents;
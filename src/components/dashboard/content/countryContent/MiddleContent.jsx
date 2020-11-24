import React from 'react';
import Moment from 'moment';
import { useSelector } from 'react-redux';

function MiddleContent() {
    let { country, countryData, countries } = useSelector(state => state.countryReducer);

    const [countryName, setCountryName] = React.useState(null);

    const getName = () => {
        if (countries) {
            let name = countries.filter(item => {
                return item.iso3 === country
            })
            console.log(name);
            setCountryName(name[0].name);
        };
    };

    React.useEffect(getName, [country]);

    return (
        <div style={{width: '100%'}}>
            <h1 style={{fontWeight: '500'}}>
                {countryName}
            </h1>
            <p>
                Last update: {countryData ? Moment(countryData.lastUpdate).format('LLL') : ""}
            </p>
        </div>
    )
};

export default MiddleContent;
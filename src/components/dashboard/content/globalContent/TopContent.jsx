import React from 'react';
import NumberFormat from 'react-number-format';
//react redux
import { useSelector } from 'react-redux';

function TopContent() {

    const [state, setState] = React.useState({confirmed: null, treatments: null, deaths: null, recovered: null});

    let { globalData } = useSelector(state => state.globalReducer);

    const insertData = () => {
        if (globalData) {
            let { confirmed, recovered, deaths } = globalData;
            let treatments = confirmed.value - (deaths.value + recovered.value);
            setState({confirmed: confirmed.value, treatments, recovered: recovered.value, deaths: deaths.value});
        }
    };

    React.useEffect(insertData, [globalData]);

    return (
        <div className="row">
            <div className="col-lg-3 col-6 mt-3 ">
                <div className="small-box bg-success">
                    <div className="inner">
                    <h3 style={{fontSize: '28px'}}>
                        <NumberFormat value={state.recovered} displayType={'text'} thousandSeparator={true} />
                    </h3>
                        <p>Recovered</p>
                    </div>
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <i className="fas fa-wheelchair"></i>
                    </div>
                    <div style={{cursor: 'pointer'}} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></div>
                </div>
            </div>
            <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-danger">
                    <div className="inner">
                    <h3 style={{fontSize: '28px'}}>
                        <NumberFormat value={state.deaths} displayType={'text'} thousandSeparator={true} />
                    </h3>
                        <p>Deaths</p>
                    </div>
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <i className="fas fa-skull-crossbones"></i>
                    </div>
                    <div style={{cursor: 'pointer'}} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></div>
                </div>
            </div>

            <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-warning">
                    <div className="inner">
                    <h3 style={{fontSize: '28px', color: 'white'}}>
                        <NumberFormat value={state.treatments} displayType={'text'} thousandSeparator={true} />
                    </h3>
                        <p style={{color: 'white'}}>Treatments</p>
                    </div>
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <i className="fas fa-procedures"></i>
                    </div>
                    <div style={{cursor: 'pointer'}} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></div>
                </div>
            </div>

            <div className="col-lg-3 col-6 mt-3">
                <div className="small-box bg-primary">
                    <div className="inner">
                    <h3 style={{fontSize: '30px'}}>
                        <NumberFormat value={state.confirmed} displayType={'text'} thousandSeparator={true} />
                    </h3>
                        <p>Confirmed</p>
                    </div>
                    <div className="icon" style={{cursor: 'pointer'}}>
                        <i className="fas fa-head-side-cough"></i>
                    </div>
                    <div style={{cursor: 'pointer'}} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></div>
                </div>
            </div>
        </div>
    )
};

export default TopContent;
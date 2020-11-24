import React from 'react';
import NumberFormat from 'react-number-format';


function Footer({ confirmed, recovered, deaths, treatments }) {

    return (
        <div className="card-footer">
            <div style={{width: '100%'}}>
            <h6 style={{textAlign: 'center'}}>Last day percentages</h6>
            <hr />
            </div>
            <div className="row">
                <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                        <span className={`description-percentage text-${recovered ? recovered.recovered !== 0 ? recovered.isUp ? "success" : "danger" : "warning" : ""}`}>
                            <i className={`fas fa-caret-${recovered ? recovered.recovered !== 0 ? recovered.isUp ? "up" : "down" : "left" : ""}`}></i> 
                            {recovered ? recovered.recovered !== 0 ? (recovered.percentages).toFixed(2) : 0 : 0}%
                        </span>
                        <h5 className="description-header">
                            <NumberFormat value={recovered ? recovered.recovered : ""} displayType={'text'} thousandSeparator={true} />
                        </h5>
                        <span className="description-text">RECOVERED</span>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                        <span className={`description-percentage text-${deaths ? deaths.deaths !== 0 ? deaths.isUp ? "success" : "danger" : "warning" : ""}`}>
                            <i className={`fas fa-caret-${deaths ? deaths.deaths !== 0 ? deaths.isUp ? "up" : "down" : "left" : ""}`}></i> 
                            {deaths ? deaths.deaths !== 0 ? (deaths.percentages).toFixed(2) : 0 : 0}%
                        </span>
                        <h5 className="description-header">
                            <NumberFormat value={deaths ? deaths.deaths : ""} displayType={'text'} thousandSeparator={true} />
                        </h5>
                        <span className="description-text">DEATHS</span>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                        <span className={`description-percentage text-${treatments ? treatments.treatments !== 0 ? treatments.isUp ? "success" : "danger" : "warning" : ""}`}>
                            <i className={`fas fa-caret-${treatments ? treatments.treatments !== 0 ? treatments.isUp ? "up" : "down" : "left" : ""}`}></i> 
                            {treatments ? treatments.treatments !== 0 ? (treatments.percentages).toFixed(2) : 0 : 0}%
                        </span>
                        <h5 className="description-header">
                            <NumberFormat value={treatments ? treatments.treatments : ""} displayType={'text'} thousandSeparator={true} />
                        </h5>
                        <span className="description-text">TREATMENTS</span>
                    </div>
                </div>
                <div className="col-sm-3 col-6">
                <div className="description-block">
                    <span className={`description-percentage text-${treatments ? treatments.treatments !== 0 ? treatments.isUp ? "success" : "danger" : "warning" : ""}`}>
                        <i className={`fas fa-caret-${confirmed ? confirmed.confirmed !== 0 ? confirmed.isUp ? "up" : "down" : "left" : ""}`}></i> 
                        {confirmed ? confirmed.confirmed !== 0 ? (confirmed.percentages).toFixed(2) : 0 : 0}%
                    </span>
                    <h5 className="description-header">
                        <NumberFormat value={confirmed ? confirmed.confirmed : ""} displayType={'text'} thousandSeparator={true} />
                    </h5>
                    <span className="description-text">CONFIRMED</span>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
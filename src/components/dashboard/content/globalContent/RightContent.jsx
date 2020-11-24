import React from 'react';
import ReactApexChart from 'react-apexcharts';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

function LeftContent() {

    let { globalData } = useSelector(state => state.globalReducer);

    const [percentages, setPercentages] = React.useState([]);
    
    const getPercentages = () => {
      if (globalData) {
        let { confirmed, recovered, deaths } = globalData;
        let treatments = confirmed.value - (deaths.value + recovered.value);
        setPercentages([recovered.value, deaths.value, treatments])
      };
    };

    React.useEffect(getPercentages, [globalData]);

    const state = {
      series: [0, 0, 0],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ["Recovered", "Deaths", "Treatments"],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    };

    return (
        <div className="card bg-gradient-info">
            <div className="card-header border-0">
                <h3 className="card-title">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                   
                </h3>
            </div>
            <div style={{marginLeft: '20px', fontWeight: '700'}}>
                <h5>Total confirmed: <NumberFormat value={globalData ? globalData.confirmed.value : ""} displayType={'text'} thousandSeparator={true} /></h5>
            </div>
            <div className="card-body">
                <ReactApexChart options={state.options} series={percentages.length > 0 ? percentages : state.series} type="pie" width={380} />
            </div>
        </div>
    )
};

export default LeftContent;
import React from 'react';
import ApexChart from "react-apexcharts";
import Footer from './leftContent/Footer';
import { useSelector } from 'react-redux';
import { F_SET_CHART_DATA } from '../../../../stores';
// import OverLay from '../../../modules/OverLay';

function Chart() {

    let { dailyData } = useSelector(state => state.globalReducer);

    const [options, setOptions] = React.useState({
      chart: {
        id: "basic-bar",
        zoom: {enable: false}
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      fill: {
        colors: ['#dc3545']
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug"]
      }
    })

    const [series, setSeries] = React.useState([
      {
        name: "confirmed",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]);

    const [confirmedData, setConfirmedData] = React.useState(null);
    const [deathsData, setDeathsData] = React.useState(null);
    const [recoveredData, setRecoveredData] = React.useState(null);
    const [treatmentsData, setTreatmentData] = React.useState(null);

    const getChartData = () => {
      if (dailyData) {
        let { data, categories, confirmedDifference, recoveredDifference,  
        deathsDifference, treatmentsDifference} = F_SET_CHART_DATA(dailyData);
        setOptions({...options, xaxis: { categories: categories }});
        setSeries([{name: "confirmed", data: data}]);
        setConfirmedData(confirmedDifference);
        setDeathsData(deathsDifference);
        setRecoveredData(recoveredDifference);
        setTreatmentData(treatmentsDifference);
      };
    };

    React.useEffect(getChartData, [dailyData]);
    
    return (
        <div className="col-md-12">
            {/* <OverLay type="Coming Soon..." /> */}
            <div className="card">

            {/* HEADER ----------------------------- */}
            <div className="card-header">
                <h5 className="card-title">Deaths Chart</h5>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
            {/* HEADER ----------------------------- */}

            {/* CHART BODY ------------------------- */}

            <div className="card-body" style={{width: '100%'}}>
                <div className="row" style={{width: '100%'}}>
                  <div style={{width: '100%'}}>
                    <div className="chart">
                        <ApexChart 
                            options={options}
                            series={series}
                            type="bar"
                            width="100%"
                            height="200"
                        />
                    </div>
                  </div>
                </div>
            </div>

              {/* FOOTER ------------------------- */}
              <Footer 
                confirmed={confirmedData}
                recovered={recoveredData}
                deaths={deathsData}
                treatments={treatmentsData}
              />
              {/* FOOTER ------------------------- */}
            </div>
        </div>
    )
};

export default Chart;

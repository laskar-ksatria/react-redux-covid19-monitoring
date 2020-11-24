import { axiosInstance } from '../utils/axiosSetting';
import { SET_GLOBAL_DATA, SET_DAILY_DATA } from './type';
import CogoToast from 'cogo-toast';
import Moment from 'moment';

export const F_GET_ALL = (dispatch, cb) => {
    axiosInstance({url: '/'})
        .then(({data}) => {
            dispatch({type: SET_GLOBAL_DATA, data});
            if (cb) cb();
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                CogoToast.error(err.response.data.message)
            }else {
                CogoToast.error("Internal Server Error");
            }
            if (cb) cb();
        })
};

const getTop10 = (data) => {
    let result = [];
    for (let i = data.length - 10; i < data.length; i++) {
        result.push(data[i])
    };
    return result;
};

export const F_GET_DAILY_REPORT = (dispatch, cb) => {
    axiosInstance({url: '/daily'})
        .then(({data}) => {
            let top10 = getTop10(data);
            let filterData = top10.map(item => {
                let treatments = item.totalConfirmed - (item.deaths.total + item.recovered.total);
                return { 
                    confirmed: item.totalConfirmed, deaths: item.deaths.total, 
                    recovered: item.recovered.total, treatments, reportDate: item.reportDate 
                }
            })
            dispatch({type: SET_DAILY_DATA, data: filterData});
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                CogoToast.error(err.response.data.message);
            }else {
                CogoToast.error("Internal server error");
            };
            if (cb) cb();
        })
};

export const F_SET_CHART_DATA = (allData) => {
    let categories = [];
    let data = [];
    allData.forEach(item => {
        categories.push(Moment(item.reportDate).format("MMM D"));
        data.push(item.deaths);
    })
    let today = allData[allData.length - 1];
    let yesterday = allData[allData.length - 2];

    let todayConfirmed = today.confirmed - yesterday.confirmed;
    let todayRecovered = today.recovered - yesterday.recovered;
    let todayDeaths = today.deaths - yesterday.deaths;
    let todayTreatments = today.treatments - yesterday.treatments;

    let confirmedDifference = {confirmed: todayConfirmed, isUp: true, percentages: (todayConfirmed / yesterday.confirmed) * 100};
    let recoveredDifference = {recovered: todayRecovered, isUp: true, percentages: (todayRecovered / yesterday.recovered) * 100};
    let deathsDifference = {deaths:todayDeaths, isUp: true, percentages: (todayDeaths / yesterday.deaths) * 100};
    let treatmentsDifference = {treatments: todayTreatments, isUp: true, percentages: (todayTreatments / yesterday.treatments) * 100};

    if (todayConfirmed < 0) confirmedDifference.isUp = false; 
    if (todayRecovered < 0) recoveredDifference.isUp = false; 
    if (todayDeaths < 0) deathsDifference.isUp = false; 
    if (todayTreatments < 0) treatmentsDifference.isUp = false; 
    
    return { categories, 
        data, 
        confirmedDifference, 
        recoveredDifference, 
        deathsDifference, 
        treatmentsDifference 
    };
};

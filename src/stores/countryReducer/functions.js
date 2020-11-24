import { axiosInstance } from '../utils/axiosSetting';
import { SET_COUNTRIES, SET_COUNTRY_DATA, SET_COUNTRY_LOADING } from './type';
import cogoToast from 'cogo-toast';

export const F_GET_COUNTRIES = (dispatch, cb) => {
    axiosInstance({url: '/countries'})
        .then(({data}) => {
            dispatch({type: SET_COUNTRIES, data: data.countries});
            if (cb) cb();
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                cogoToast.error(err.response.data.message)
            }else {
                cogoToast.error("Internal server error")
            }
            if (cb) cb();
        })
};

export const F_GET_COUNTRY_DATA = (dispatch,params, cb) => {
    if (params !== "") {
        axiosInstance({url: `/countries/${params}`})
        .then(({data}) => {
            dispatch({type: SET_COUNTRY_DATA, data});
            dispatch({type: SET_COUNTRY_LOADING, data: false});
            if (cb) cb();
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                cogoToast.error(err.response.data.message);
            }else {
                cogoToast.error("Internal server erorr");
            };
            dispatch({type: SET_COUNTRY_LOADING, data: false});
            if (cb) cb();
        })
    };
};
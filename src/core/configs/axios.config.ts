import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { environment } from './app.config';
import { store } from 'store/store.config';
import { setLoader } from 'store/store.reducer';
import { errorToast, successToast } from '../shared/toast/toast';
import { getToken } from '../helpers/get-token';

const axiosInstance = axios.create({
    baseURL: environment.apiMain,
});
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        store.dispatch(setLoader(true));
        return config;
    }, (error) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const method = response?.config?.method?.toUpperCase() ?? '';

        if (method === 'POST') {
            successToast('Müraciət göndərildi');
        }

        if (response.data) {
            store.dispatch(setLoader(false));
        }
        return response;
    },
    (error) => {
        let errMessage = '';

        const {
            response: { status, },
        } = error;

        switch (status) {
            case 401:
                errMessage = 'Sessiya müddəti bitmişdir';
                localStorage.removeItem(`${environment.applicationName}-token`);
                break;

            case 404:
                errMessage = 'Məlumat tapılmadı';
                break;

            case 500:
                errMessage = 'Server xətası';
                break;

            default:
                errMessage = 'Xəta baş verdi';
        }

        errorToast(errMessage);
        store.dispatch(setLoader(false));
    }
);
export default axiosInstance;

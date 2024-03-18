import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import {ILoginFormValues} from '../login';

export const login = (credentials: ILoginFormValues): Promise<{ token: string }> => {
    return axiosInstance.post(API.posts, credentials)
        .then((res) => res.data);
};


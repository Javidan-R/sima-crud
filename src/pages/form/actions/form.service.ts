import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const addPost = (user: any): Promise<any> => {
    return axiosInstance.post(API.users, user)
        .then((res) => res.data);
};


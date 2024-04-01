import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const addPost = (user: IUser): Promise<IUser> => {
    return axiosInstance.post(API.users, user)
        .then((res) => res.data);
};


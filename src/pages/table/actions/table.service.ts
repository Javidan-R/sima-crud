import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import TableModel from '../models/table.model';

export  const getPostsService = () => {
    return axiosInstance.get(API.users).then((res: any) => { 
        return res.data.map((item: any) => new TableModel(item));
    });
};

export const deletePostService = async ({id}:any) => {
    await axiosInstance.delete(`${API.users}/${id}`);
  };
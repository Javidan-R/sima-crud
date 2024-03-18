import {useMutation, useQuery} from 'react-query';
import { getPostsService} from './table.service';
import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const usePosts = ()=>{
    return useQuery<any[], Error>('test', () => {
        return getPostsService();
    });
};
export const useDeletePostMutation = () => {
    return useMutation<void, Error, number>(
        async (id: number) => {
            await axiosInstance.delete(`${API.users}/${id}`);
        }
    );
};
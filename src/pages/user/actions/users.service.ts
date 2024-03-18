import axiosInstance from 'core/configs/axios.config';
import { API } from 'core/configs/api.config';
import UserModel from '../models/user.models';

export const getUserService = () => {
  return axiosInstance.get(API.users).then((res: any) => {
    return res.data.map((item: any) => new UserModel(item));
  });
};

export const addUserService = (user: IUser): Promise<any> => {
  return axiosInstance.post(API.users, user)
    .then((res) => res.data);
};

export const deleteUserService = (id: string): Promise<void> => {
  return axiosInstance.delete(`${API.users}/${id}`);
};

export const updateUserService = ({ id, ...user }: IUser): Promise<void> => {
  console.log(user);
  return axiosInstance.put(`${API.users}/${id}`, user);
};
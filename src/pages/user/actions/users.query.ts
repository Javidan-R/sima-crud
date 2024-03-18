import { useQuery } from 'react-query';
import UserModel from '../models/user.models';
import { getUserService } from './users.service';

export const useGetUser = () => {
  return useQuery<UserModel[], Error>('Users', () => {
    return getUserService();
  });
};

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteUserService, getUserService, updateUserService } from './users.service';
import UserModel from '../models/user.models';

export const useGetUser = () => {
  return useQuery<UserModel[], Error>('Users', () => {
    return getUserService();
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>(   
    (id: string) => {
      return deleteUserService(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('Users');
      },
      onError: (error: any) => {
        console.error('Error Delete user:', error);
      },
    }
  );
};


export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, IUser>({
    mutationFn: (user: IUser) => {
      return updateUserService(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('Users');
    },
    onError: (error: any) => {
      console.error('Error Adding user:', error);
    },
  });
};


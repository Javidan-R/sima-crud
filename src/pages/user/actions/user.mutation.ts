import { useQueryClient, useMutation } from 'react-query';
import { deleteUserService, updateUserService } from './users.service';

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
        // onError: (error: Error) => {
        //   console.error('Error Delete user:', error.message);
        // },
      }
    );
};
  
  
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation<void, Error, IUser>(
      async (user: IUser) => {
          const updatedUserData = await updateUserService(user);
          return updatedUserData;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('Users');
        },
        // onError: (error: Error) => {
        //   console.error('Error:', error.message);
        // },
      }
    );
};

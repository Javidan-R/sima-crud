import { useQueryClient, useMutation } from "react-query";
import { deleteUserService, updateUserService } from "./users.service";

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
  
  
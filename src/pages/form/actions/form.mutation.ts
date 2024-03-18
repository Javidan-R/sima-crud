import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import { addPost } from './form.service';
export const useForm = () => {
  const navigate = useNavigate();
  return useMutation({
      mutationFn: (credentials: IUser) => {
        return addPost(credentials);
      },
      onSuccess: () => {
        navigate(Routes.users);
      },
      onError: (error: any) => {
        console.error('Error adding user:', error);
      },
   }
  );
};

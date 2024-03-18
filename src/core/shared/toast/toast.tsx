import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {generateGuid} from '../../helpers/generate-guid';

export const successToast = (mes: string) => {
    toast.success(
        <div className='success'>
            {mes}
        </div>,
        {
            toastId: generateGuid(),
        }
    );
};
export const warningToast = (mes: string) => {
    toast.warning(
        <div className='warning'>
            {mes}
        </div>,
        {
            toastId: generateGuid(),
        }
    );
};
export const errorToast = ( mes: string  ) => {
    toast.error(
        <div className='error'>
            {mes}
        </div>,
        {
            toastId: generateGuid(),
        }
    );
};
export const infoToast = (mes: string) => {
    toast.info(
        <div className='info'>
            {mes}
        </div>,
        {
            toastId: generateGuid(),
        }
    );
};

import {environment} from '../configs/app.config';

export const getToken = (): string | null => {
    return localStorage.getItem(`${environment.applicationName}-token`);
};

export const setToken = (token: string) => {
    localStorage.setItem(`${environment.applicationName}-token`, token);
};

export const clearToken = (): void => {
    localStorage.removeItem(`${environment.applicationName}-token`);
};
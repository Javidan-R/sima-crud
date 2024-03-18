import {ILang} from '../assets/lang/lang';

export interface IState {
    loader: boolean;
    leftMenu: boolean;
    languages: ILanguages[];
    locale: any;
    user: any | null;
}


export interface ILanguages {
    id: number;
    key: ILang;
    value: string;
}

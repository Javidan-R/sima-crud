export interface IFormValues {
    title: string;
    body: string;
    fruit: string[];
    check: boolean;
    date: string;
    time: string;
    car: string;
    language: string;
    languages: string[];
}

export interface EditUserFormProps {
    user: IUser;
    onSuccess: () => void;
  }
  
import { Profil } from './Profil';

export class User{
    id?: number;
    firstname: string;
    email: string;
    lastname: string;
    roles?: [];
    password?: string;
    username: string;
    avatar?: any;
    token?: any;
    profil: Profil;
}


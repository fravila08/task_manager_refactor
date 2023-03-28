
export interface IUser{
    email: string;
    id : number;
}

export interface HeaderProps{
    user : IUser | null;
    setShowLogIn : (showLogIn:boolean) => void;
    logMeOut :()=>void;
}

export interface SignUpProps{
    setShowLogIn:(showLogIn: boolean) => void;
}

export interface ITask{
    title : string;
    description : string;
    complete : boolean;
    id : number;
    user : number;
}

export interface TaskRendererProps{
    user : IUser;
}

export interface TaskProps{
    task: ITask;
}
export interface LoginRequestState {
    type: string;
    username: string;
    password: string;
}

interface IResponse {
    id: number;
}

export interface LoginResponseState {
    type: string;
    payload: IResponse;
}

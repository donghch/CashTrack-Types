
export enum ServerResponseCode {
    SUCCESS, 
    ERROR
}

export interface ServerResponse {
    code: ServerResponseCode;
    text: string;
    data?: any;
}

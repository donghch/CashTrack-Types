
enum ResponseCode {
    SUCCSESS, 
    ERROR
}

interface Response {
    code: ResponseCode;
    text: string;
    data?: any;
}

export { Response, ResponseCode };
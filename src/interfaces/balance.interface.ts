export interface IResponseCurrentBalance {
 status:          string;
 responseMessage: string;
 data:            Data;
}

export interface Data {
 balanceCommerce: string;
}
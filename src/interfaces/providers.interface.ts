
export interface IResponseProviders {
 status:          string;
 responseMessage: string;
 data:            Data;
}

export interface Data {
 companies: Company[];
}

export interface Company {
 company: string;
 _id:     string;
 image:   string;
}

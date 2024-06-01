export interface Product {
    _id: number;
    productName: string;
    productTypeName: string;
    mbSpeed?: number | null;
    gbData?: number | null;
    numeracioTerminal: number;
    soldAt: string;
    customerId: string;
  }
  
  export interface Client {
    _id: number;
    docType: string;
    docNum: string;
    email: string;
    customerId: string;
    givenName: string;
    familyName1: string;
    phone: string;
  }
  
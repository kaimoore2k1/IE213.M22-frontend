type Image = {
    title: string;
    url: string
}

export interface DataType {
    key: React.Key;
    name: string;
    price: number;
    quantity: number;
    image: Image;
    ID_Product: string
}
export interface PaymentInformation {
    firstName: string;
    lastName: string;
    country: string;
    address: string;
    code?: string;
    city?: string;
    numberPhone?: string;
    email?: string;
    paymentMethod?: string;
    voucher: string;
    note: string;
}

export interface FieldData {
    name: string | number | (string | number)[];
    value?: any;
}

export interface CustomizedFormProps {
    onChange: (fields: FieldData[]) => void;
    fields: FieldData[];
    onSubmit: (e:any) => void;
}
export interface PaymentMethod {
    paymentMethodID: number;
    name: string;
    title: string;
}
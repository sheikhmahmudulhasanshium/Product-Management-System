import { type } from "os";

export interface IUser{
    id:number|""
    username:string|"",
    email:string|"",
    phone:string|"",
    address:string|"",
    password:string|"",
    cpassword:string|"",
    checkbox:boolean,
    category:Category,
}
export type Category="seller"|"admin"|"customer"|"employee"|"other";

export interface IProduct{
    id: number | "",
    imageSrc:string|"",
    productName: string | "",
    description: string | "",
    price: number | 0.00,
    prevPrice: number | 0.00,
    discount: number | 0.00,
    manuDate: string | '00/00/0000',
    expDate: string | '00/00/0000',
    quality: Quality,
    unitsAvailable: number | 0.00,
    supplierContact: string | "",
}
type Quality= 'Good'|'Bad'|'Medium'|'Best'|'Worst'
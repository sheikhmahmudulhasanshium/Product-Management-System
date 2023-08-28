
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

import { Time } from "@angular/common";

export interface Order{
    orderid:number;
    userid:number;
    date_of_order:Date;
    time_of_order:Time;
    total_payment:number;
}
import type {
 LeadPayload
}
from "./lead-payload";


export type QueueItem = {


 id:string;


 payload:LeadPayload;


 status:
 "pending" |
 "sending" |
 "success" |
 "failed";


 attempts:number;


 createdAt:string;


};
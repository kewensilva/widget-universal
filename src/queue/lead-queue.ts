import type {
 LeadPayload
}
from "../types/lead-payload";


import type {
 QueueItem
}
from "../types/queue";


import {
 saveQueue,
 getQueue
}
from "./queue-storage";



export const addLeadToQueue =
(
 payload:LeadPayload
) => {


 const item:QueueItem = {


 id:
 crypto.randomUUID(),


 payload,


 status:
 "pending",


 attempts:0,


 createdAt:
 new Date()
 .toISOString()


 };


 const queue =
 getQueue();



 queue.push(
  item
 );


 saveQueue(
  queue
 );


};
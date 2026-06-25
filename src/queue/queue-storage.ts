import type {
 QueueItem
}
from "../types/queue";


const KEY =
"crm_widget_lead_queue";



export const getQueue =
():QueueItem[] => {


 const data =
 localStorage.getItem(KEY);


 if(!data){
   return [];
 }


 return JSON.parse(data);

};



export const saveQueue =
(
 queue:QueueItem[]
) => {


 localStorage.setItem(
  KEY,
  JSON.stringify(queue)
 );

};
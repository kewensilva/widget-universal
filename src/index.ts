import { bootstrap } from "./bootstrap";
import { on } from "./events/bus";
import { EVENTS } from "./events/events";
import { sendLead } from "./api/send-lead";


on(
 EVENTS.LEAD_SUBMIT,

async payload => {


 console.log(
  "ENVIANDO LEAD",
  payload
 );


 const response =
 await sendLead(
   payload as any
 );


 console.log(
  "RESPOSTA API",
  response
 );


});
bootstrap();
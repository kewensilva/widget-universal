import {
  getQueue,
  saveQueue
}
  from "./queue-storage";


import {
  sendLead
}
  from "../api/send-lead";
import { logger } from "../logger/loggger";


export const processQueue =
  async () => {


    const queue =
      getQueue();


    for (
      const item of queue
    ) {


      if (
        item.status === "success"
      ) {
        continue;
      }


      try {


        item.status =
          "sending";


        item.attempts++;


        saveQueue(queue);



        await sendLead(
          item.payload
        );


        item.status =
          "success";


      }
      catch (error) {


        item.status =
          "failed";


        logger.error(
          "Falha ao enviar lead",
          error
        );


      }


    }


    saveQueue(queue);


  };
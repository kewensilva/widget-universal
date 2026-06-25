type Status =
 | "idle"
 | "loading"
 | "success"
 | "error";


let currentStatus: Status =
"idle";


export const setStatus =
(
 status:Status
) => {

 currentStatus =
 status;

};


export const getStatus =
():Status => {

 return currentStatus;

};
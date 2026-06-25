export const createStatus =
(
 container:HTMLElement
) => {


 const status =
 document.createElement(
  "div"
 );


 status.className =
 "crm-widget-status";


 status.style.display =
 "none";


 container.appendChild(
  status
 );


 return status;

};
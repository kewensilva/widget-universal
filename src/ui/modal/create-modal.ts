import {
 setModal
}
from "./modal-state";


export const createModal = (
 shadow: ShadowRoot
) => {


 const existing =
 shadow.querySelector(
  ".crm-widget-modal"
 );


 if(existing){

  return existing as HTMLElement;

 }



 const modal =
 document.createElement(
  "div"
 );


 modal.className =
 "crm-widget-modal";


 modal.innerHTML = `

 <div class="crm-widget-window">


   <div class="crm-widget-header">

     <span>
       Fale conosco
     </span>


     <button
       class="crm-widget-close"
     >
       ×
     </button>


   </div>


   <div
    class="crm-widget-body"
   ></div>


 </div>

 `;


 shadow.appendChild(
  modal
 );


 setModal(
  modal
 );


 return modal;

};
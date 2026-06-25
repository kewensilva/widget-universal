import {
  createModal
} from "../modal/create-modal";


import {
  openModal,
  closeModal
} from "../modal/modal-events";


import {
  createForm
} from "../form/create-form";


import {
  registerFormSubmit
} from "../form/submit-form";



let initialized = false;



export const registerButtonEvents = (
  button: HTMLElement,
  shadow: ShadowRoot
) => {


  if (initialized) {
    return;
  }


  initialized = true;



  const modal =
    createModal(
      shadow
    );



  const body =
    modal.querySelector(
      ".crm-widget-body"
    ) as HTMLElement;



  const form =
    createForm(
      body
    );



  registerFormSubmit(
    form
  );



  const closeButton =
    modal.querySelector(
      ".crm-widget-close"
    ) as HTMLElement;



  button.addEventListener(
    "click",
    () => {


      openModal(
        modal
      );


    }
  );



  closeButton.addEventListener(
    "click",
    () => {


      closeModal(
        modal
      );


    }
  );


};
import {
  modalStyles
} from "../ui/modal/modal.css";


import {buttonStyles} from "../ui/button/button.css";


let shadowInstance: ShadowRoot | null = null;


export const createShadowRoot = (): ShadowRoot => {


  /**
   * Evita criar múltiplos Shadow DOM
   */
  if (shadowInstance) {
    return shadowInstance;
  }



  const host =
    document.createElement(
      "div"
    );


  host.id =
    "crm-widget-root";



  document.body.appendChild(
    host
  );



  const shadow =
    host.attachShadow(
      {
        mode: "open"
      }
    );



  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    ${buttonStyles}


    ${modalStyles}

  `;



  shadow.appendChild(
    style
  );



  shadowInstance =
    shadow;



  return shadow;

};
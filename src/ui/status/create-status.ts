import {
    setStatusElement
}
from "./status-state";



export const createStatus =
(
    container: HTMLElement
) => {


    const existing =
        container.querySelector(
            ".crm-widget-status"
        );


    if(existing){

        return existing as HTMLElement;

    }



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



    setStatusElement(
        status
    );



    return status;

};
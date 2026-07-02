let statusElement:
HTMLElement | null = null;


export const setStatusElement = (
    element: HTMLElement
) => {

    statusElement = element;

};



export const getStatusElement = () => {

    return statusElement;

};
let modalInstance: HTMLElement | null = null;


export const setModal =
(
 modal: HTMLElement
) => {

 modalInstance = modal;

};


export const getModal =
() => {

 return modalInstance;

};
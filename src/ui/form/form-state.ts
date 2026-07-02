let formInstance:
HTMLFormElement | null = null;


export const setForm =
(
form:HTMLFormElement
)=>{

 formInstance=form;

};



export const getForm =
()=>{

 return formInstance;

};
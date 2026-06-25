export const updateStatus =
(
 element:HTMLElement,
 status:
 "loading" |
 "success" |
 "error"
) => {


 element.style.display =
 "block";


 if(status === "loading"){

  element.innerHTML =
  `
  Enviando...
  `;

 }


 if(status === "success"){

  element.innerHTML =
  `
  <strong>
  Enviado com sucesso!
  </strong>

  `;

 }


 if(status === "error"){

  element.innerHTML =
  `
  Ocorreu um erro.
  Tente novamente.
  `;

 }

};
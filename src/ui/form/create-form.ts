import {
  getForm,
  setForm
}
from "./form-state";


export const createForm = (
  container: HTMLElement
): HTMLFormElement => {


  /**
   * Evita criar múltiplos formulários
   */
  const existingForm =
    getForm();


  if (existingForm) {

    return existingForm;

  }



  const form =
    document.createElement(
      "form"
    );


  form.className =
    "crm-widget-form";



  form.innerHTML = `

    <div class="crm-widget-field">

      <label>
        Nome
      </label>

      <input
        name="name"
        type="text"
        placeholder="Seu nome"
        required
      />

    </div>



    <div class="crm-widget-field">

      <label>
        Telefone
      </label>


      <input
        name="phone"
        type="tel"
        placeholder="Telefone Ex:(11 999999999)"
        required
      />

    </div>



    <div class="crm-widget-field">


      <label>
        Email
      </label>


      <input
        name="email"
        type="email"
        placeholder="Email"
      />


    </div>



    <button
      type="submit"
      class="crm-widget-submit"
    >

      Enviar

    </button>


  `;



  container.appendChild(
    form
  );



  setForm(
    form
  );



  return form;

};
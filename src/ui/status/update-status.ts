export const updateStatus = (

    element: HTMLElement,

    type:
    "loading" |
    "success" |
    "error"

) => {



    element.style.display =
        "block";



    if(type === "loading"){

        element.innerHTML =
        `
        Enviando...
        `;

    }



    if(type === "success"){


        element.innerHTML =
        `
        <div class="crm-success">

            Dados enviados com sucesso!

        </div>
        `;

    }



    if(type === "error"){


        element.innerHTML =
        `
        <div class="crm-error">

            Erro ao enviar dados.

        </div>
        `;

    }

};
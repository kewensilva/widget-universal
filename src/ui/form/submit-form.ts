import type { Lead } from "../../types/lead";

import { emit } from "../../events/bus";

import { EVENTS } from "../../events/events";


import {
    validateEmail,
    validateName,
    validatePhone
} from "./validators";


import { createLeadPayload } from "../../leads/create-lead-payload";


import { addLeadToQueue } from "../../queue/lead-queue";

import {
    isFormRegistered,
    markFormRegistered
} from "./form-events";



export const registerFormSubmit =
(
    form: HTMLFormElement

) => {


    if (isFormRegistered()) {
        return;
    }


    markFormRegistered();



    form.addEventListener(
        "submit",
        event => {


            event.preventDefault();



            const data =
                new FormData(form);



            const lead: Lead = {


                name:
                    String(
                        data.get("name") ?? ""
                    ),



                phone:
                    String(
                        data.get("phone") ?? ""
                    ),



                email:
                    String(
                        data.get("email") ?? ""
                    )


            };



            /**
             * Validações
             */


            if (!validateName(lead.name)) {

                console.warn(
                    "Nome inválido"
                );

                return;
            }



            if (!validatePhone(lead.phone)) {

                console.warn(
                    "Telefone inválido"
                );

                return;
            }



            if (!validateEmail(lead.email)) {

                console.warn(
                    "Email inválido"
                );

                return;
            }




            const payload =
                createLeadPayload(
                    lead
                );



            addLeadToQueue(
                payload
            );



            emit(
                EVENTS.LEAD_SUBMIT,
                payload
            );


        }
    );


};
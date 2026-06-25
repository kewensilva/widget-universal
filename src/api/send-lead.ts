import { httpClient } from "./http-client";
import { API_CONFIG } from "../config/api";
import type { LeadPayload } from "../types/lead-payload";
import { logger } from "../logger/loggger";

export const sendLead = async (payload: LeadPayload) => {
  const response =
    await httpClient(`${API_CONFIG.baseUrl}${API_CONFIG.leadEndpoint}`,

      {
        method: "POST",

        body: JSON.stringify(payload)
      }

    );
  logger.info(
    "Enviando lead",
    payload
  );



  return response;

};
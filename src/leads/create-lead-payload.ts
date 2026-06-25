import type { Lead } from "../types/lead";

import type { LeadPayload } from "../types/lead-payload";

import { getTracking } from "../tracking/get-tracking";
import { widgetState } from "../core/state";

export const createLeadPayload = (lead: Lead): LeadPayload => {
    const tracking = getTracking();

    return {
        lead,
        tenant: {
            id: widgetState.tenant?.id ?? "",
            publicKey: widgetState.tenant?.publicKey ?? ""
        },
        tracking: {
            sessionId:
                tracking.sessionId,


            pageUrl:
                tracking.pageUrl,


            landingPage:
                tracking.landingPage,


            referrer:
                tracking.referrer,



            utm: {

                utmSource:
                    tracking.utmSource,


                utmMedium:
                    tracking.utmMedium,


                utmCampaign:
                    tracking.utmCampaign,


                utmContent:
                    tracking.utmContent,


                utmTerm:
                    tracking.utmTerm,
            },

        },
        source:
            "widget",


        timestamp:
            new Date()
                .toISOString()

    };
}
import { getSessionId } from "./get-sessions-id";

import { getPageUrl } from "./get-page";
import { getLandingPage } from "./get-landing-page";
import { getReffrer } from "./get-referrer";
import { getUTM } from "./get-utm";


export const getTracking = () => {
    return {
        sessionId: getSessionId(),
        pageUrl: getPageUrl(),
        landingPage: getLandingPage(),
        referrer: getReffrer(),

        ...getUTM()


    }
}
import { widgetState } from "./state";


import { getScriptConfig } from "../config/get-script-config";
import { getSessionId } from "../tracking/get-sessions-id";

import { emit } from "../events/bus";
import { EVENTS } from "../events/events";
import { getTracking } from "../tracking/get-tracking";
import { createShadowRoot } from "../dom/create-shadow-root";
import { createButton } from "../ui/button/create-button";
import { registerButtonEvents } from "../ui/button/button-events";
import { resolveTenant } from "../tenant/resolve-tenant";
import { validateEnvironment } from "../security/validate-enviroment";
import { processQueue } from "../queue/process-queue";
import { enableLogger, logger } from "../logger/loggger";

export const initWidget = async (): Promise<void> => {
    if (widgetState.initialized) {
        return;
    }
    processQueue();

    const config = getScriptConfig();
    enableLogger(config.debug);
    const tenant = await resolveTenant(config.key);

    const sessionId = getSessionId();
    const tracking = getTracking();
    const isValid = validateEnvironment(tenant.allowedDomains);
    if (!isValid) {
        console.error("[Widget] domínio não autorizado");
        return;
    }
    const shadow = createShadowRoot();

    widgetState.config = config;
    widgetState.sessionId = sessionId;
    widgetState.tenant = tenant;
    widgetState.initialized = true;




    emit(EVENTS.SESSION_CREATED, sessionId);

    const button = createButton(shadow, tenant.widgetConfig.widget.position, tenant.widgetConfig.theme.primaryColor);
    registerButtonEvents(button, shadow)
    logger.info("Widget inicializado", {
        config, tenant, sessionId, tracking
    }
    );

};
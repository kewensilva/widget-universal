import type {
    TenantConfig
}
    from "../types/tenant";
import { WidgetConfig } from "../config/widget-config";

import {
    loadWidgetConfig
}
    from "../config/load-widget-config";



export const resolveTenant = async (publicKey: string): Promise<TenantConfig> => {


        const widgetConfig = await loadWidgetConfig(publicKey);


        return {


            id:
                "tenant_test_001",


            name:
                "Empresa Teste",


            publicKey,
            allowedDomains: [
                '127.0.0.1',
                "cliente.com.br",
                "apresentacaocontentmkt.com.br"
            ],

            widgetConfig


        };

    };
import type {
 WidgetConfig
}
from "../config/widget-config";


export type TenantConfig = {


 id:string;


 name:string;


 publicKey:string;


 allowedDomains:string[];


 widgetConfig:
 WidgetConfig;


};
import type {
 WidgetConfig
}
from "./widget-config";



export const loadWidgetConfig =
async (
 tenantId:string
):Promise<WidgetConfig> => {


 console.log(
  "Loading widget config",
  tenantId
 );


 return {


 theme:{

  primaryColor:
   "#2563eb",

  textColor:
   "#ffffff"

 },


 widget:{

  position:
   "right",

  title:
   "Fale conosco"

 },


 form:{

  fields:[

   "name",

   "phone",

   "email"

  ],


  required:[

   "name",

   "phone"

  ]

 }

 };

};
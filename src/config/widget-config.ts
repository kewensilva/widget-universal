export type WidgetConfig = {


  theme: {

    primaryColor: string;

    textColor: string;

  };


  widget: {

    position:
      "left" | "right";

    title:string;

  };


  form: {

    fields:string[];

    required:string[];

  };

};
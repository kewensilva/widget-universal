export const createButton = (shadow: ShadowRoot, position: "left" | "right", color: string) => {
    const button = document.createElement("button");

    button.className = "crm-widget-button";

    button.innerHTML = "💬";



    Object.assign(
        button.style,
        {

            position: "fixed",

            bottom: "20px",

            [position]: "20px",

            width: "56px",

            height: "56px",

            borderRadius: "50%",


            background:
                color,


            color:
                "#fff",


            border: "none",

            cursor: "pointer",

            zIndex: "999999"

        }
    );

    shadow.appendChild(button);

    return button;
}
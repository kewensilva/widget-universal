
import { initWidget } from "../core/init-widget";


export const bootstrap = (): void => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initWidget);
        return;
    }
    initWidget()
}
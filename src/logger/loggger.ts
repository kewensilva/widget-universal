import type { LogLevel } from "./levels";
let enabled = false;
export const enableLogger = (value: boolean) => {
    enabled = value;
};

export const logger = {
    info(message: string, data?: unknown) {
        if (!enabled) {
            return;
        }
        console.log(`[Widget] ${message}`, data ?? "");
    },
    warn(message: string, data?: unknown) {

        if (!enabled) {
            return;
        }
        console.warn(`[Widget] ${message}`, data ?? "");
    },
    error(message: string, data?: unknown) {
        console.error(`[Widget] ${message}`, data ?? "");
    }
};
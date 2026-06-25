import { generateId } from "../utils/uuid";
import { SESSION_STORAGE_KEY } from "./constants";

export const getSessionId = (): string => {
    const existingSession = localStorage.getItem(SESSION_STORAGE_KEY)

    if (existingSession) {
        return existingSession

    }
    const newSession = generateId();
    localStorage.setItem(SESSION_STORAGE_KEY, newSession);

    return newSession
}
type EventHandler = (payload?: unknown) => void;

const listeners = new Map<string, Set<EventHandler>>();

export const on = (event: string, handler: EventHandler): void => {
    if (!listeners.has(event)) {
        listeners.set(event, new Set())

    }

    listeners.get(event)?.add(handler);
};

export const off = (event: string, handler: EventHandler): void => {
    listeners.get(event)?.delete(handler);
};

export const emit = (event: string, payload?: unknown): void => {
    listeners.get(event)?.forEach(handler => handler(payload))
}
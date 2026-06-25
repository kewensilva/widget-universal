import { LANDING_PAGE_STORAGE_KEY } from "./constants";
export const getLandingPage = (): string => {
    const existingPage = localStorage.getItem(LANDING_PAGE_STORAGE_KEY)

    if (existingPage) {
        return existingPage
    }
    const currentPage = window.location.href;

    localStorage.setItem(LANDING_PAGE_STORAGE_KEY, currentPage);

    return currentPage;
}
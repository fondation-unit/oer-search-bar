declare global {
    export interface Window {
        OER_SEARCH_BAR: string|any
    }
}

export const OER_SEARCH_BAR_URL = window.OER_SEARCH_BAR.url

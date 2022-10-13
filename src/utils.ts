declare global {
    export interface Window {
        OER_SEARCH_BAR: string|any
    }
}

const OER_SEARCH_BAR_PLACEHOLDER = window.OER_SEARCH_BAR.placeholder
const OER_SEARCH_BAR_URL = window.OER_SEARCH_BAR.url

export {
    OER_SEARCH_BAR_PLACEHOLDER,
    OER_SEARCH_BAR_URL
}

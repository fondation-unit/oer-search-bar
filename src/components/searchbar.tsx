import * as React from 'react'
import { OER_SEARCH_BAR_PLACEHOLDER, OER_SEARCH_BAR_TITLE, OER_SEARCH_BAR_URL } from '../utils'


const Searchbar = () => {
    return (
        <div className="oer-searchbar container">
            <h3 className="oer-searchbar-title">{ OER_SEARCH_BAR_TITLE }</h3>
            <div className="oer-searchbar-research" data-external-search-url={ OER_SEARCH_BAR_URL }>
                <div className="input-group">
                    <input className="search-navbar form-control" value="" type="text" placeholder={ OER_SEARCH_BAR_PLACEHOLDER } />
                    <button className="launch-search-btn" type="button">
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

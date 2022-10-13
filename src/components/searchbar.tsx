import * as React from 'react'
import { __ } from '@wordpress/i18n'
import { OER_SEARCH_BAR_PLACEHOLDER, OER_SEARCH_BAR_TITLE, OER_SEARCH_BAR_URL } from '../utils'


const Searchbar = () => {
    return (
        <div className="oer-searchbar">
            <h3>{ OER_SEARCH_BAR_TITLE }</h3>
            <div className="search-wrapper research" data-external-search-url={ OER_SEARCH_BAR_URL }>
                <div className="input-group">
                    <input className="search-navbar form-control" value="" type="text" placeholder={ OER_SEARCH_BAR_PLACEHOLDER } />
                    <button className="launch-search-btn btn btn-primary" type="button">
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

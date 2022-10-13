import * as React from 'react'
import { __ } from '@wordpress/i18n'
import { OER_SEARCH_BAR_URL, OER_SEARCH_BAR_PLACEHOLDER } from '../utils'


const Searchbar = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
                <h3>Notre catalogue de ressources</h3>
                <div className="search-wrapper research" data-external-search-url={ OER_SEARCH_BAR_URL }>
                    <div className="input-group">
                        <input className="search-navbar form-control" value="" type="text" placeholder={ OER_SEARCH_BAR_PLACEHOLDER } />
                        <button className="launch-search-btn btn btn-primary" type="button">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

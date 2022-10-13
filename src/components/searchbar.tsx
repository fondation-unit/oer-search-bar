import * as React from 'react';
import { OER_SEARCH_BAR_URL } from '../utils'


const Searchbar = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
                <h3>Notre catalogue de ressources</h3>
                <div id="search-wrapper" className="research" data-external-search-url={ OER_SEARCH_BAR_URL }>
                    <div className="input-group">
                        <input id="search-navbar" value="" type="text" className="form-control" placeholder="Rechercher parmi les cours, les ressources, ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button id="launch-search-btn" className="btn btn-primary" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

import React, { useState } from 'react'
import { OER_SEARCH_BAR_PLACEHOLDER, OER_SEARCH_BAR_TITLE, OER_SEARCH_BAR_URL } from '../utils'


const Searchbar = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = () => {
        window.location.href = `${OER_SEARCH_BAR_URL}&userChoices[simple_all].simpleValue=${searchText}`
    }

    return (
        <div className="oer-searchbar container">
            <h3 className="oer-searchbar-title">{ OER_SEARCH_BAR_TITLE }</h3>
            <div className="oer-searchbar-research" data-external-search-url={ OER_SEARCH_BAR_URL }>
                <div className="input-group">
                    <input className="search-navbar form-control" 
                            value={searchText} 
                            type="text" 
                            placeholder={ OER_SEARCH_BAR_PLACEHOLDER }
                            onChange={ e => setSearchText(e.target.value) } />
                    <button className="launch-search-btn" 
                            type="button"
                            onClick={ handleSearch }>
                        <i className="fas fa-search front" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

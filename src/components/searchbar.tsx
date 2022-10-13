import * as React from 'react';

const Searchbar = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
                <h3 className="part-title text-center pt-50">Notre catalogue de ressources</h3>
                <div id="search-wrapper" className="research" data-solr-enabled="" data-external-search-url="http://ressources.unit.eu/moteur-ressources-educatives-libres/advanced-search.html?submenuKey=advanced&amp;search=true&amp;menuKey=lom&amp;userChoices[simple_all].simpleValueRequestType=default&amp;userChoices[simple_all].simpleValue=%q%">
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

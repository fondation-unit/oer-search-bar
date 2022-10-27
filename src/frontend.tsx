import React from 'react'
const WPElement = require('@wordpress/element')
import Searchbar from './components/searchbar'


const rootElement = document.getElementById('oersearchbar-block-root');
if (rootElement) {
    WPElement.render(
        <Searchbar />,
        document.getElementById('oersearchbar-block-root')
    );
}

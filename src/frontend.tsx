import React from 'react'
const WPElement = require('@wordpress/element')
import Searchbar from './components/searchbar'


WPElement.render(
    <Searchbar />,
    document.getElementById('oersearchbar-block-root')
)

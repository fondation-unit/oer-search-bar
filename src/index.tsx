import * as React from 'react'
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit'
import Save from './components/save'

export default registerBlockType('oersearchbar/oersearchbar-esnext', {
    title: 'OER Search Bar',
    icon: 'search',
    category: 'widget',
    attributes: {
        content: {
            type: 'array'
        }
    },
    edit: (props) => <Edit {...props} />,
    save: () => <Save />
})

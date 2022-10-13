import React, { FunctionComponent } from 'react'
import Searchbar from './searchbar'
import { EditProps } from '../types/Edit'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	if (props) {
		return <Searchbar />
	}
	return <div className="alert alert-danger">Missing URL</div>
}

export default Edit
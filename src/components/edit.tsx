import React, { FunctionComponent } from 'react'
import EditorSearchbar from './editorsearchbar'
import { EditProps } from '../types/Edit'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	if (props) {
		return <EditorSearchbar />
	}
	return <div className="alert alert-danger">Missing URL</div>
}

export default Edit
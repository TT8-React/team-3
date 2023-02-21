import React, { useId } from 'react'
import Style from './style'

// images
import uploadIcon from '../../assets/images/icons/upload.png'
const UploadInput = ({ file, setFile }) => {
    const id = useId();

    const handelChange = (e) => {
        setFile(e.target.value)
    }

    return (
        <Style>
            <input
                className="upload_input"
                type="file"
                id={id}
                onChange={handelChange}
                value={file}
            />
            <label className="upload_label" htmlFor={id}>
                <img src={uploadIcon} alt="upload" />
                {file ? file : "Upload here..."}
            </label>
        </Style>
    )
}

export default UploadInput
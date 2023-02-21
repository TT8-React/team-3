import React from 'react'
import { H4 } from '../../../../components/Typography'
import UploadInput from '../../../../components/UploadInput'
import Style from './style'

const Tab2 = () => {
    return (
        <Style>
            <H4 margin="0 0 32px">Upload CSV document</H4>
            <UploadInput />
        </Style>
    )
}

export default Tab2
import React from 'react'
import { PATHS } from '../../../routes'
import CustomLink from '../../CustomLink'
import { Body1 } from '../../Typography'
import Style from './style'

const PopUp = ({ close }) => {
    return (
        <Style>
            <div className="popup_closer" onClick={close} />
            <div className="popup" onClick={close}>
                <div className="popup_content">
                    <div className="arrow_up"></div>
                    <Body1 weight="700">
                        <CustomLink to={PATHS.PROFILE_DETAILS}>
                            Profile Details
                        </CustomLink>
                    </Body1>
                </div>
            </div>
        </Style >
    )
}

export default PopUp
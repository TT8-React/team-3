import React from 'react'
import Style from './style'
// components
import { H5 } from '../../../Typography';

// images
import arrowRight from '../../../../assets/images/icons/arrowRight.png';
const TransferListItem = ({ move, content, isDestination }) => {
    return (
        <Style onClick={move}>
            {isDestination ? <>
                <img className="to_left_arrow" src={arrowRight} alt="move" />
                <H5>{content}</H5>
            </>
                :
                <>
                    <H5>
                        {content}
                    </H5>
                    <img src={arrowRight} alt="move" />
                </>
            }
        </Style>
    )
}

export default TransferListItem
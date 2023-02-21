import React from 'react'
import TransferListItem from '../TransferListItem'
import Style from './style'

const TransferListBlock = ({ move, list, isDestination }) => {
    return (
        <Style>
            {list.map((el, index) => <TransferListItem
                move={() => move(el.id)}
                isDestination={isDestination}
                key={el.id}
                content={el.text}
            />)}
        </Style>
    )
}

export default TransferListBlock
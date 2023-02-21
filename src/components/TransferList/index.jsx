import React, { useState } from 'react'
import { initialLeftList, initialRightList } from '../../mock/TransferListMockLists'
import TransferListBlock from './components/TransferListBlock'
import Style from './style'

// images
import doubleArrowRight from '../../assets/images/icons/doubleArrowRight.png';
import doubleArrowLeft from '../../assets/images/icons/doubleArrowLeft.png';

const TransferList = () => {
    const [leftList, setLeftList] = useState(initialLeftList);
    const [rightList, setRightList] = useState(initialRightList);

    const moveToDestination = (id) => {
        const temp = leftList.find(el => el.id === id);
        setLeftList(prev => prev.filter(el => el.id !== id));
        setRightList(prev => [...prev, { ...temp }]);
    }

    const backFromDestination = (id) => {
        const temp = rightList.find(el => el.id === id);
        setRightList(prev => prev.filter(el => el.id !== id));
        setLeftList(prev => [...prev, { ...temp }]);
    }

    const moveAllToDestination = () => {
        setRightList([...leftList, ...rightList]);
        setLeftList([])
    }

    const moveAllFromDestination = () => {
        setLeftList([...leftList, ...rightList]);
        setRightList([]);
    }

    return (
        <Style>
            <TransferListBlock move={moveToDestination} list={leftList} />
            <div className="move_buttons">
                <button onClick={moveAllToDestination}>
                    <img src={doubleArrowRight} alt="move all to destination" />
                </button>
                <button onClick={moveAllFromDestination}>
                    <img src={doubleArrowLeft} alt="move all from destination" />
                </button>
            </div>
            <TransferListBlock move={backFromDestination} isDestination list={rightList} />
        </Style>
    )
}

export default TransferList
import React from 'react'
import Style from './style'

const ReportTable = ({ content }) => {
    return (
        <Style>
            <table>
                {content.map((el, index) => <tr key={index} className='report_table_row'>
                    <td>{index + 1}</td>
                    <td>{el}</td>
                </tr>)}
            </table>
        </Style>
    )
}

export default ReportTable
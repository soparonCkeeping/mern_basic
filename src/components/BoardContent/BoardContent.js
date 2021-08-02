import React from 'react'
import './boardcontent.scss'
import Column from  './../Column/Colum'

const BoardContent = () => {
    return (
        <div className="board-content">
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>

        </div>
    )
}

export default BoardContent

import React from 'react'
import './App.scss'
import './_setting.scss'
import Appbar from './components/Appbar/Appbar'
import Boardbar from './components/Boardbar/Boardbar'
import BoardContent from './components/BoardContent/BoardContent'

const App = () => {
    return (
        <div className="trello-application">
            <Appbar></Appbar>
            <Boardbar></Boardbar>
            <BoardContent></BoardContent>
        </div>  
    )
}

export default App

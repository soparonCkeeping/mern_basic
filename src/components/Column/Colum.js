import React from 'react'
import Task from './../Task/Task'


const Colum = () => {
    return (
        <div className="column">
            <header>
                Brainstorm    
            </header>
            <ul className="task-list">
                <Task></Task>
                {/* <li className="task-item">Add what you like below</li >    
                <li className="task-item">Add what you like below</li >    
                <li className="task-item">Add what you like below</li >    
                <li className="task-item">Add what you like below</li >    
                <li className="task-item">Add what you like below</li >    
                <li className="task-item">Add what you like below</li >     */}
            </ul>
            <footer>
                Add    
            </footer>  
        </div>

    )
}

export default Colum

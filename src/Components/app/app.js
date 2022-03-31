import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "../app-header";
import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import './app.css'

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a Lunch', important: false, id: 3}
    ]
    return (
        <div className='todo-app'>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <ToDoList todos={todoData}/>
        </div>

    )
}

export default App
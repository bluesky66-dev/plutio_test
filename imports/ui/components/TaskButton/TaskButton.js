import React from 'react';

export const TaskButton = ({onAddNewTaskButtonClick}) => {
    return(
        <button onClick={onAddNewTaskButtonClick}>Add a new task</button>
    )
};
import React, {useState} from 'react';
import {TaskForm} from '../components/TaskForm/TaskForm';
import {Tasks} from '../components/Tasks/Tasks';
import {TaskButton} from '../components/TaskButton/TaskButton';

export const Main = () => {

  const [isAddTaskButtonClicked, setIsAddTaskButtonClicked] = useState(false);
  const onAddNewTaskButtonClick = () => {
    setIsAddTaskButtonClicked(!isAddTaskButtonClicked);
  };

    return(
        <div className="main-tasks-page content list-view">
          <TaskButton onAddNewTaskButtonClick={onAddNewTaskButtonClick} />
          {isAddTaskButtonClicked && <TaskForm />}
          <div className="groups-wrapper">
              <Tasks status={"incomplete"}/>
            <Tasks status={"completed"}/>
          </div>
        </div>
    );
};
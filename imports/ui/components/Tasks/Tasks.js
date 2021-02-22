import React from 'react';
import {getTasks} from '/imports/api/tasks/methods/get';
import {useTracker} from 'meteor/react-meteor-data';
import {Icon} from '../Icon/Icon';


export const Tasks = (props) => {

    const {status} = props;

    const tasks = useTracker(() => getTasks(), []);

    const completedTasks = tasks.map(task => {
        const displayChatIcon = () => {
            if (task.commentsCount > 0) return <Icon icon="chat"/>
        };
        const displayAttachIcon = () => {
            if (task.filesCount > 0) return <Icon icon="attach" />
        };
        const displayTimerIcon = () => {
            if (task.timerIcon > 0) return <Icon icon="timer"/>
        };
        const displayIconDescription = () => {
            if (task.hasDescription) return <Icon icon="description"/>
        };
        if (task.status === status) {
            return (
                <div
                    key={task._id}
                    className="task">
                    <a
                        className="task-link has-color-tag"
                        href="#"
                        style={{borderColor: '#4e42c3'}}
                    >
                        <div className="task-link-head">
                            <div className="task-checkbox">
                                <label className="checkbox">
                                    <input type="checkbox"
                                           checked={status === "completed" ? 1 : 0}
                                           onChange={() => {}}/>
                                    <span className="checkbox-toggle">
                            <i className="checkbox-icon icon-check"/>
                            </span>
                                </label>
                            </div>
                            <div className="task-title">
                                <p>{task.title}</p>
                            </div>
                        </div>
                        <div className="task-link-body">
                            <div className="indicators">
                                {displayIconDescription()}
                                {displayChatIcon()}
                                {displayAttachIcon()}
                                {displayTimerIcon()}
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
    })

    return (
        <div className="group-container open">
            <div className="group-head">
                <p>{status === "completed" ? "Completed" : "Incomplete"}</p>
            </div>
            {completedTasks}
        </div>
    )
}
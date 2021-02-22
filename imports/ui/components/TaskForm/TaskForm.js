import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Random } from 'meteor/random';
import '/imports/api/tasks/methods/create';


export const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [repeat, setRepeat] = useState(0);
    const [customFieldsClicked, setCustomFieldsClicked] = useState(false);
    const [customFields, setCustomFields] = useState('');
    const [color, setColor] = useState('');

    const taskToAdd = {
        title,
        dueDate,
        repeat: {
            interval: repeat
        },
        customFields: [
            {
                id: Random.id(),
                value: customFields
            }
        ],
        color,
        commentsCount: 4,
        filesCount: 4,
        timerIcon: 6,
        hasDescription: true,
        isPrivate: false,
        status:'incomplete'
    };

    return (
        <form className="task-form">
            <input
                onChange={(e) => setTitle(e.target.value) }
                type="text"
                placeholder="Title"
            />
            <input
                onChange={(e) => setDueDate(e.target.value) }
                type="date"
                placeholder="Title"
            />
                <input 
                placeholder="Repeat Times"
                onChange={(e) => setRepeat(e.target.value) } 
                />
            <label className="inline-label">
                Color
            <input
                onChange={(e) => setColor(e.target.value)}
                className="color-input"
                type="color"
                placeholder="Color"
            />
            </label>
            <button 
            onClick={(e) => {
                e.preventDefault();
                setCustomFieldsClicked(!customFieldsClicked);
            }}
            style={{display: "block"}}>Custom fields</button>
            {customFieldsClicked && <input 
                                    type="text"
                                    placeholder="Add anything you want"
                                    onChange={(e) => {
                                        setCustomFields(e.target.value)
                                    }}
             />}
            <button 
            style={{backgroundColor: "#E04E4B"}}
            className="submit-task-btn"
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                Meteor.call('tasks.createTask', taskToAdd);
            }}
            >Submit</button>
        </form>
    );
};
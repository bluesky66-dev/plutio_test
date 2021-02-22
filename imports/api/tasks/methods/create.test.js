import { Meteor } from 'meteor/meteor';
import { mockMethodCall } from 'meteor/quave:testing';
import { assert } from 'chai';
import { tasks } from '/imports/api/db/tasks';
import './create';

// Testing createTask method
if(Meteor.isServer) {
    describe('Tasks', () => {
        describe('createTaskMethod', () => {
            it('can create a new task', () => {
                const task = {
                    title: 'Something',
                    dueDate: '1/2/2021',
                    repeat: {
                        interval: 0
                    },
                    customFields: [
                        {
                            id: '123',
                            value: 'anyValue'
                        }
                    ],
                    color: 'color',
                    commentsCount: 3,
                    filesCount: 4,
                    timerIcon: 4,
                    hasDescription: true,
                    isPrivate: false,
                    status: 'incomplete'
                };

                mockMethodCall('tasks.createTask', task);
                const tasksData = tasks.find({}).fetch();
                assert.isTrue(tasksData.some(task => task.title === task.title));
                assert.isTrue(tasksData.some(task => task.dueDate === task.dueDate));
                assert.isTrue(tasksData.some(task => task.repeat === task.repeat));
                assert.isTrue(tasksData.some(task => task.customFields === task.customFields));
                assert.isTrue(tasksData.some(task => task.color === task.color));
                assert.isTrue(tasksData.some(task => task.commentsCount === task.commentsCount));
                assert.isTrue(tasksData.some(task => task.filesCount === task.filesCount));
                assert.isTrue(tasksData.some(task => task.timerIcon === task.timerIcon));
                assert.isTrue(tasksData.some(task => task.hasDescription === task.hasDescription));
                assert.isTrue(tasksData.some(task => task.isPrivate === task.isPrivate));
                assert.isTrue(tasksData.some(task => task.status === task.status));
            })
        })
    })
};


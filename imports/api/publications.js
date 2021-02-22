import { Meteor } from 'meteor/meteor';
import { tasks } from '/imports/api/db/tasks';

Meteor.publish('tasks', function publishTasks() {
    return tasks.find();
});


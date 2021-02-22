import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { tasks } from '/imports/api/db/tasks';

Meteor.methods({
    'tasks.createTask'(task) {
        check(task, {
            title: String,
            dueDate: String,
            repeat: Object,
            customFields: Array,
            color: String,
            commentsCount: Number,
            filesCount: Number,
            timerIcon: Number,
            hasDescription: Boolean,
            isPrivate: Boolean,
            status: String
        });

        tasks.insert(task);
    }
});
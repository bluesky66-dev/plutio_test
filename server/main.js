import { Meteor } from 'meteor/meteor';
import { tasks } from '/imports/api/db/tasks';
import { Random } from 'meteor/random';
import '/imports/api/publications';
import '/imports/api/tasks/methods/create';
import '/imports/api/tasks/methods/get';



const testData = [
  {
    title: 'Task1',
    hasDescription: true,
    commentsCount: 2,
    color: '#4e42c3',
    status: 'incomplete',
    isPrivate: false
  },
  {
    title: 'Task2',
    customFields: [
      {
        _id: Random.id(),
        value: 'Highest'
      }
    ],
    status: 'incomplete',
    isPrivate: false
  },
  {
    title: 'Task3',
    hasDescription: true,
    filesCount: 3,
    status: 'incomplete',
    isPrivate: false
  },
  {
    title: 'Task4',
    hasDescription: true,
    commentsCount: 3,
    totalTimeTracked: 15,
    status: 'incomplete',
    repeat: {
      interval: 3
    },
    isPrivate: false
  },
  {
    title: 'Task5',
    status: 'completed',
    isPrivate: false
  },
  {
    title: 'Task6',
    status: 'completed',
    commentsCount: 5,
    isPrivate: false
  },
  {
    title: 'Task7',
    status: 'completed',
    isPrivate: true
  }
];

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (tasks.find().count() === 0) {
    testData.forEach(task => tasks.insert(task));
  };
});;
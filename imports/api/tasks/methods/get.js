import { tasks } from '/imports/api/db/tasks';

export const getTasks = () => tasks.find({
    isPrivate: false
}).fetch();


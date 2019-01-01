const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

/* Todo.remove({}).then((result) => {
    console.log(result);
});
 */
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

/* Todo.findOnAndRemove({_id:'5c2b7f21573871bbc91c6bde'}).then((todo) => {
    console.log(todo);
});
 */

Todo.findByIdAndRemove('5c2b7f21573871bbc91c6bde').then((todo) => {
    console.log(todo);
});
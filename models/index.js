const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };


// const User = require('./User');
// const Blog = require('./Blogs');
// const Comment = require('./Comment');

// User.hasMany(Blog, {
//     foreignKey: 'user_id'
// });
// Blog.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Comment.belongsTo(Blog, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Blog.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })
// module.exports = { User, Blog, Comment };
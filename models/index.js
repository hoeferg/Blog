const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: "user_id",
});

Post.belongsTo(User,{
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.hasMany(Comment,{
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
    foreignKey: "Post_id",
    onDelete: "CASCADE"
});

User.hasMany(comment, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

module.exports = { User, Comment, Post };

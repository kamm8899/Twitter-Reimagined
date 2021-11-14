const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
     comment: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

postSchema.virtual('postCount').get(function() {
  return this.comment.length;
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

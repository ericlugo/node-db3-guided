const db = require('../data/db-config');

userModel = module.exports = {};

userModel.find = function() {
  return db('users');
};

userModel.findById = function(id) {
  return db('users').where({ id });
};

userModel.findPosts = function(user_id) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'u.username', 'p.contents')
    .where({ user_id });
};

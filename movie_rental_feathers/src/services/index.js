const users = require('./users/users.service.js');
const genres = require('./genres/genres.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(genres);
};

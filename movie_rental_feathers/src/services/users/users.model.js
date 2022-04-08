const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

const schema = Joi.object({
  _id: objectId(),
  name: Joi.string().min(5).max(50).required(true),
  email: Joi.string().min(5).max(255).required(true),
  password: Joi.string().min(5).max(1024).required(true),
  isAdmin: Joi.boolean().default(false).required(true),
});

module.exports.schema = schema;

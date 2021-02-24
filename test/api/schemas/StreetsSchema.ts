const Joi = require('joi');

// validate that the response is an array with name Streets and all the objects are strings
class StreetsSchema {
  getSchema() {
    const schema = Joi.object({
      Streets: Joi.array().items(Joi.string()),
    });
    return schema;
  }
}

export default new StreetsSchema().getSchema();

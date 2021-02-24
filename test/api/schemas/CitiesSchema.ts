const Joi = require('joi');

// validate that the response is an array with name Cities and all the objects are strings
class CitiesSchema {
  getSchema() {
    const schema = Joi.object({
      Cities: Joi.array().items(Joi.string()),
    });
    return schema;
  }
}

export default new CitiesSchema().getSchema();

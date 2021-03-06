import * as Joi from 'joi';

export default {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3000),
  NODE_EN: Joi.string().valid('dev', 'prod', 'debug').default('dev'),
};

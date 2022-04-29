import * as Joi from 'joi';

export default {
  TYPEORM_TYPE: Joi.string().default('postgres'),
  TYPEORM_HOST: Joi.string(),
  TYPEORM_USERNAME: Joi.string(),
  TYPEORM_PASSWORD: Joi.string(),
  TYPEORM_DATABASE: Joi.string().default('core'),
  TYPEORM_PORT: Joi.number().default(5432),
  TYPEORM_LOGGING: Joi.string().default('false'),
  TYPEORM_MIGRATIONS_RUN: Joi.string().default('true'),
  TYPEORM_SYNCHRONIZE: Joi.string().default('false'),
  TYPEORM_AUTO_LOAD_ENTITIES: Joi.string().default('true'),
  PGADMIN_DEFAULT_EMAIL: Joi.string(),
  PGADMIN_DEFAULT_PASSWORD: Joi.string(),
};

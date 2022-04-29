import * as Joi from 'joi';
import app from './app';
import database from './database';
import cognito from './cognito';

export default Joi.types().object.keys({
  ...app,
  ...database,
  ...cognito,
});

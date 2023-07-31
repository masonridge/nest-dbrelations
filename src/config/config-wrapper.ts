import { registerAs } from '@nestjs/config';
import * as Config from 'config';
import * as Joi from 'joi';

export const GlobalConfig = async function () {
  const validationSchema = Joi.object({
    type: Joi.string().required(),
    host: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
  }).unknown(); // allow other keys
  const { error, value: _ } = await validationSchema.validate(Config.db.global);

  // any other validation goes here
  //
  if (error) {
    throw new Error(
      `Configuration validation error in db.global: ${error.message}`,
    );
  }

  return Config;
};
export const jwtConfig = registerAs('jwt', async () => {
  const validationSchemaJwt = Joi.object({
    secret: Joi.string().required(),
    audience: Joi.string().required(),
    issuer: Joi.string().required(),
    accessTokenTtl: Joi.number().required(),
    refreshTokenTtl: Joi.number().default(86400).required(),
  }).unknown(); // allow other keys
  const { error: errJwt, value: jwtObject } =
    await validationSchemaJwt.validate(Config.jwt);
  if (errJwt) {
    throw new Error(`Configuration validation error in jwt: ${errJwt.message}`);
  }

  return { ...jwtObject };
});

// export default { GlobalConfig, jwtconfig };

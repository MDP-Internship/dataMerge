import Joi from '@hapi/joi'

export function personelInfoValidation(object) {
  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    username: Joi.string().required(),
    mail: Joi.string().email().required(),
    adress: Joi.string().required(),
  })
  const result = schema.validate(object, { abortEarly: false })
  if (result.error) {
    return {
      res: false,
      err: {
        // eslint-disable-next-line no-underscore-dangle
        id: result.error._original.id,
        message: result.error.details[0].message,
        value: result.error.details[0].context.value,
      },
    }
  }
  return { res: true, err: null }
}

export function isPersoneId(personelId) {
  const idArray = Joi.array().items(Joi.number().required())
  const result = idArray.validate(personelId, { abortEarly: false })
  if (result.error) {
    const value = result.error.details[0].context.value
    const key = result.error.details[0].context.key

    return {
      res: false,
      err: `id should be in string not number => value: "${value}" key: "${key}"`,
    }
  }
  return { res: true }
}

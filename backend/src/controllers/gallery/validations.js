import Joi from 'joi';

const GallerySchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  url: Joi.string().required(),
  duration: Joi.number().required(),
});

export default GallerySchema;

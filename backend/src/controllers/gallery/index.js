import Gallery from "../../models/gallery";
import Boom from "boom";
import gallerySchema from "./validations";

const Create = async (req, res, next) => {
  const input = req.body;
  const { error } = gallerySchema.validate(input);

  if (error) {
    return next(Boom.badRequest(error.details[0].message));
  }

  try {

    const gallery = new Gallery(input);
    const savedData = await gallery.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
};

const Get = async (req, res, next) => {
  const { gallery_id } = req.params;

  if (!gallery_id) {
    return next(Boom.badRequest("Missing paramter (:gallery_id)"));
  }

  try {
    const gallery = await Gallery.findById(gallery_id);

    res.json(gallery);
  } catch (e) {
    next(e);
  }
};

const Update = async (req, res, next) => {
  const { gallery_id } = req.params;

  try {
    const updated = await Gallery.findByIdAndUpdate(gallery_id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (e) {
    next(e);
  }
};

const Delete = async (req, res, next) => {
  const { gallery_id } = req.params;

  try {
    const deleted = await Gallery.findByIdAndDelete(gallery_id);

    if (!deleted) {
      throw Boom.badRequest("gallery not found.");
    }

    res.json(deleted);
  } catch (e) {
    next(e);
  }
};

const GetList = async (req, res, next) => {
  try {
    const gallery = await Gallery.find({});
    res.json(gallery);
  } catch (e) {
    next(e);
  }
};

export default {
  Create,
  Get,
  Update,
  Delete,
  GetList,
};

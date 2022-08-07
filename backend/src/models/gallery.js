import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },

});

const Gallery = mongoose.model('gallery', GallerySchema,'gallery');

export default Gallery;

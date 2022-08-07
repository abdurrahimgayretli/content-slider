import express from "express";
//import { cache } from "joi";

import Gallery from "../controllers/gallery";
// import cache from '../cache';

const router = express.Router();

router.post("/", Gallery.Create);
router.get("/:gallery_id", Gallery.Get);
// router.get('/', cache.route(), Gallery.GetList);
router.get("/", Gallery.GetList);
router.put("/:gallery_id", Gallery.Update);
router.delete("/:gallery_id", Gallery.Delete);

export default router;

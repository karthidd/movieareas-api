import express, { response } from "express";

import { MovieIndex, MovieCreate, MovieUpdate, MovieDelete } from "../controllers/movie.controller.js"  ;


const router = express.Router();

router.get  ("/",MovieIndex);

router.post ("/",MovieCreate);

router.put   ("/",MovieUpdate);

router.delete ("/",MovieDelete);

export default router;
import express from "express";
import * as log from "../middleware/loggers.middleware.js"
import {send404, helloWorld} from "../controllers/web.controllers.js";

const router = express.Router();

router.get('/', helloWorld)

router.use(log.origin, log.headers, log.body, send404)

export default router;
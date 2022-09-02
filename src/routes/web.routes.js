import express from "express";
import * as log from "../middleware/loggers.middleware.js"
import {send404, sendJson} from "../controllers/web.controllers.js";

const router = express.Router();

router.get('/', log.headers, sendJson)

router.use(log.headers, send404)

export default router;
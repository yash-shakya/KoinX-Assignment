import express from "express";
import { getCoinData,getDeviation } from "../controller/coin.controller.js";

const router = express.Router();

router.get("/stats", getCoinData);
router.get("/deviation", getDeviation);


export default router;

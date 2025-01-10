import express from "express";
import { getCoinData } from "../controller/coin.controller.js";

const router = express.Router();

router.get("/stats", getCoinData);

export default router;

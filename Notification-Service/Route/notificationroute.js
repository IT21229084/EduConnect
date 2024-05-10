import express from "express"
import { email, sms } from "../controllers/NotificationController.js";
const router = express.Router();


router.post("/email",email)
router.post("/sms",sms);

export default router
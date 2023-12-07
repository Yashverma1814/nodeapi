import express from "express";
import { User } from "../models/user.js";
import { createUser, getAllUsers, getUserById } from "../controllers/user.js";

const router = express.Router();


router.get("/all/:id",getUserById)

router.get("/all",getAllUsers)


router.post("/new",createUser)


export default router

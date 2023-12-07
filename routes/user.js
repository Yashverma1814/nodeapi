import express from "express";
import { User } from "../models/user.js";
import { createUser, getAllUsers, getUserById, login } from "../controllers/user.js";

const router = express.Router();


router.get("/all/:id",getUserById)

router.get("/all",getAllUsers)

router.post("/new",createUser)

router.post("/login",login)



export default router

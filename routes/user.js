
import express, { json } from "express";
import { User } from "../models/user.js";
import { createUser, getAllUsers, getMyProfile, login, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";


const router = express.Router();



router.get("/me",isAuthenticated,getMyProfile)

router.get("/all",getAllUsers)

router.post("/new",createUser)

router.post("/login",login)

router.post("/logout",logout)

router.post("/",createUser);

export default router

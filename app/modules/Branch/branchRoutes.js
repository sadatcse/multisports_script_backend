import express from "express";
import { getAllBranches } from "../../../controllers/branchController";

const router = express.Router();

router.get("/", getAllBranches);

export default router;
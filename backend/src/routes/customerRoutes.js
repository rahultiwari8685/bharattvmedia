import express from "express";
import {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer
} from "../controllers/customerController.js";
import { getCustomerDashboard } from "../controllers/customerDashboardController.js";
import { verifyCustomer } from "../middlewares/authMiddleware.js";
import { getMyReports } from "../controllers/customerReportsController.js";

const router = express.Router();


router.get("/dashboard", verifyCustomer, getCustomerDashboard);

router.post("/saveCustomer", createCustomer);
router.get("/", getCustomers);
// router.get("/:id", getCustomerById);
router.put("/updateCustomer/:id", updateCustomer);

router.get("/my-reports", verifyCustomer, getMyReports);


export default router;

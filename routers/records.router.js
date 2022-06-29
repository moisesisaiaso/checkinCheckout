const express = require("express");

//Controllers
const {
    getAllRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord,
} = require("../controllers/records.controllers");

const recordsRouter = express.Router();

recordsRouter.get("/", getAllRecords);
recordsRouter.get("/:id", getRecordById);
recordsRouter.post("/", createRecord);
recordsRouter.patch("/:id", updateRecord);
recordsRouter.delete("/:id", deleteRecord);

module.exports = { recordsRouter };

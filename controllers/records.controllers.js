//Modelo
const { Record } = require("../models/record.model");

const getAllRecords = async (req, res) => {
    try {
        const records = await Record.findAll();

        res.status(200).json({
            status: "success",
            records,
        });
    } catch (error) {
        console.log(error);
    }
};

const getRecordById = async (req, res) => {
    const { id } = req.params;

    const record = await Record.findOne({ where: { id } });

    if (!record) {
        return res.status(404).json({
            status: "error",
            message: "record not found",
        });
    }

    res.status(200).json({
        status: "success",
        record,
    });
};

const createRecord = async (req, res) => {
    try {
        const { entraceTime } = req.body;

        const newRecord = await Record.create({
            entraceTime,
            status: "working",
        });

        res.status(201).json({
            status: "success",
            newRecord,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { exitTime } = req.body;
    const record = await Record.findOne({ where: { id } });

    if (!record) {
        return res.status(404).json({
            status: "error",
            message: "record not found",
        });
    }

    await record.update({ exitTime, status: "out" });
    res.status(204).json({
        status: "success",
    });
};

const deleteRecord = async (req, res) => {
    const { id } = req.params;
    const record = await Record.findOne({ where: { id } });

    if (!record) {
        return res.status(404).json({
            status: "error",
            message: "record not found",
        });
    }

    await record.update({ status: "cancelled" });
    res.status(204).json({
        status: "success",
    });
};

module.exports = { getAllRecords, getRecordById, createRecord, updateRecord, deleteRecord };

const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      true: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecords = mongoose.model(
  "MedicalRecords",
  medicalRecordSchema
);

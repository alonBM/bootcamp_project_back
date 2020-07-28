import * as mongoose from 'mongoose';

export const professionalSchema = new mongoose.Schema({
    name: String,
    firstSurname: String,
    secondSurname: String,
    gender: String,
    birthDate: Date,
    nif: String,
    userType: String,
    address: {
        street: String,
        streetNumber: String,
        doorNumber: String,
        postalCode: String,
        city: String,
    },
    medicalBoardNumber: String,
    professionalType: String
})
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PatientDto } from '../../domain/dto/patient-dto'
import { Patient } from '../../domain/models/patient.interface'
import { Model } from 'mongoose'

@Injectable()
export class PatientService {
    constructor(@InjectModel('Patient') private patientModel: Model<Patient>) { }

    async getPatients(): Promise<Patient[]> {
        return await this.patientModel.find();
    }

    async getPatient(id: string): Promise<Patient> {
        return await this.patientModel.findById(id);
    }

    async deletePatient(id: string): Promise<Patient> {
        return await this.patientModel.findByIdAndDelete(id);
    }

    async createPatient(patientDto: PatientDto): Promise<Patient> {
        const patient = new this.patientModel(patientDto);
        return await patient.save();
    }

    async updatePatient(id: string, patientDto: PatientDto): Promise<Patient> {
        return await this.patientModel.findByIdAndUpdate({ _id: id }, patientDto);
    }

}

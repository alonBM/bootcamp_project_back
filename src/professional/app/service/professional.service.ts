import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProfessionalDto } from '../../domain/dto/professional-dto'
import { Professional } from '../../domain/models/professional.interface'
import { Model } from 'mongoose'

@Injectable()
export class ProfessionalService {

    constructor(@InjectModel('Professional') private readonly professionalModel: Model<Professional>) { }

    async getAllProfessionals(): Promise<Professional[]> {
        const professionals = await this.professionalModel.find();
        return professionals;
    }

    async getProfessional(id: string): Promise<Professional> {
        return await this.professionalModel.findById(id);
    }

    async deleteProfessional(id: string): Promise<Professional> {
        return await this.professionalModel.findByIdAndDelete(id);
    }

    async createProfessional(professionalDto: ProfessionalDto): Promise<Professional> {
        const professional = new this.professionalModel(professionalDto);
        return await professional.save();
    }

    async updateProfessional(id: string, professionalDto: ProfessionalDto): Promise<Professional> {
        return await this.professionalModel.findByIdAndUpdate({ _id: id }, professionalDto);
    }





}

//createProfessional
//deleteProfessional
//updateProfessional



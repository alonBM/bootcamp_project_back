import { UserType, Gender, Address } from '../../../common/interfaces/user-types.interface';
import { Document } from 'mongoose';

export interface Professional extends Document {
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthdate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    medicalBoardNumber: string;
    professionalType: ProfessionalType;
}

export type ProfessionalType = 'Doctor' | 'Nurse' | 'Administrator';


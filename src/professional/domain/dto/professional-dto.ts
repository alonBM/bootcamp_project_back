import { UserType, Gender, Address } from '../../../common/interfaces/user-types.interface';
import { ProfessionalType } from '../models/professional.interface'

export class ProfessionalDto {
    _id: string;
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
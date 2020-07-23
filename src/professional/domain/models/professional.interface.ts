import { UserType, Gender, Address } from '../../../common/user-types.interface';
export interface Professional {
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthDate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    medicalBoardNumber: string;
    professionalType: ProfessionalType;
}

export type ProfessionalType = 'Doctor' | 'Nurse' | 'Administrator';


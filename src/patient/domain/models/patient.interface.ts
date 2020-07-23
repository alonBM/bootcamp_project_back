import { UserType, Gender, Address } from '../../../common/user-types.interface';

export interface Patient {
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthDate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    nhc: string;
    insuranceList: InsuranceCompany[];
}

export interface InsuranceCompany {
    insuranceCompanyName: string;
    insuranceType: InsuranceType;
    cardNumber: string;
}

export type InsuranceType = 'Dental' | 'Health' | 'Family';

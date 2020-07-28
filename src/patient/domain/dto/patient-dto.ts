import { UserType, Gender, Address } from '../../../common/user-types.interface';
import { InsuranceCompany } from '../models/patient.interface'

export class PatientDto {
    _id: string;
    name: string;
    firstSurname: string;
    secondSurname: string;
    gender: Gender;
    birthdate: Date;
    nif: string;
    address: Address;
    userType: UserType;
    nhc: string;
    InsuranceList: InsuranceCompany[]
}
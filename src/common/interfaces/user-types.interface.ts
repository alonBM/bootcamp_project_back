
export type UserType = 'Patient' | 'Professional';

export type Gender = 'Male' | 'Female' | 'Other';

export interface Address {
  streetName: string;
  streetNumber: string;
  doorNumber: string;
  postalCode: string;
  city: string;
}

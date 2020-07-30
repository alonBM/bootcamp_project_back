import { Module } from '@nestjs/common';
import { PatientController } from './ui/patient.controller';
import { PatientService } from './app/service/patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { patientSchema } from './infrastructure/mongodb/patient.schema'
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    MongooseModule.forFeature([{ name: 'Patient', schema: patientSchema }])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }

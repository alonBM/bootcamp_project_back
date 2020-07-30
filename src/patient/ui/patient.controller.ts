import { Controller, Get, Param, Delete, Post, Body, Put, UseGuards } from '@nestjs/common';
import { Patient } from '../domain/models/patient.interface';
import { PatientService } from '../app/service/patient.service';
import { PatientDto } from '../domain/dto/patient-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('patients')
@UseGuards(AuthGuard())
export class PatientController {
    constructor(private patientService: PatientService) { }

    @Get()
    getPatients(): Promise<Patient[]> {
        return this.patientService.getPatients();
    }

    @Get('/:id')
    getPatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.getPatient(id);
    }

    @Delete('/:id')
    deletePatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.deletePatient(id);
    }

    @Post()
    createPatient(@Body() patientDto: PatientDto): Promise<Patient> {
        return this.patientService.createPatient(patientDto);
    }

    @Put('/:id')
    updatePatient(
        @Body() patientDto: PatientDto,
        @Param('id') id: string): Promise<Patient> {
        return this.patientService.updatePatient(id, patientDto);
    }
}

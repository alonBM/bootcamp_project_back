
import { Controller, Get, Param, Delete, Post, Body, Put, UseGuards } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface';
import { ProfessionalService } from '../app/service/professional.service';
import { ProfessionalDto } from '../domain/dto/professional-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('professionals')
@UseGuards(AuthGuard())
export class ProfessionalController {
    constructor(private professionalService: ProfessionalService) { }

    @Get()
    getAllProfessionals(): Promise<Professional[]> {
        return this.professionalService.getAllProfessionals();
    }

    @Get('/:id')
    getProfessional(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.getProfessional(id);
    }

    @Delete('/:id')
    deleteProfessional(@Param('id') id: string): Promise<Professional> {
        return this.professionalService.deleteProfessional(id);
    }

    @Post()
    createProfessional(
        @Body() professionalDto: ProfessionalDto,
    ): Promise<Professional> {
        return this.professionalService.createProfessional(professionalDto);
    }

    @Put('/:id')
    updateProfessional(
        @Body() professionalDto: ProfessionalDto,
        @Param('id') id: string,
    ): Promise<Professional> {
        return this.professionalService.updateProfessional(id, professionalDto);
    }

}

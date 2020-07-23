import { Controller, Get, Req } from '@nestjs/common';
import { Professional } from '../domain/models/professional.interface'
import { ProfessionalService } from '../app/service/professional.service'
@Controller('professional')
export class ProfessionalController {
    constructor(private professionalService: ProfessionalService){}

    @Get('/professionals/')
    getAllProfessionals(): Professional[] {
        const professionals = this.professionalService.getAllProfessionals();
        return null:

    }


}

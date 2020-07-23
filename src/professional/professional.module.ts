import { Module } from '@nestjs/common';
import { ProfessionalController } from './ui/professional.controller';

@Module({
  controllers: [ProfessionalController]
})
export class ProfessionalModule {}

import { Module } from '@nestjs/common';
import { ProfessionalController } from './ui/professional.controller';
import { ProfessionalService } from './app/service/professional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { professionalSchema } from './infrastructure/mongodb/professional.schema'
@Module({
  imports:[MongooseModule.forFeature([{name: 'Professional', schema: professionalSchema}])] ,
  controllers: [ProfessionalController],
  providers: [ProfessionalService]
})
export class ProfessionalModule {}

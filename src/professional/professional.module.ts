import { Module } from '@nestjs/common';
import { ProfessionalController } from './ui/professional.controller';
import { ProfessionalService } from './app/service/professional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { professionalSchema } from './infrastructure/mongodb/professional.schema'
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    MongooseModule.forFeature([{ name: 'Professional', schema: professionalSchema }])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService]
})
export class ProfessionalModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ProfessionalModule } from './professional/professional.module';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PatientModule,
    ProfessionalModule,
    CommonModule,
    MongooseModule.forRoot(
      'mongodb+srv://evan:XXXX@cluster0.hlssc.mongodb.net/his?retryWrites=true&w=majority',
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

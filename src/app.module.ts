import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://api_profile_user:hh7LKqXv2fQvJOEI@cluster0.nku7uom.mongodb.net/profile-db'),
    ProfileModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}

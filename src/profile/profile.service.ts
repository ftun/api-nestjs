import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './entities/profile.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile.name) private profileModel: Model<Profile>) { }

    public getProfileData(): Promise<Profile> {
        return this.profileModel.findOne().exec();
    }

    async updateProfile(id: string, updateProfile: UpdateProfileDto): Promise<Profile> {
        try {
            return await this.profileModel.findByIdAndUpdate(id, updateProfile)
        } catch (error) {
            if (error.name == "CastError") throw new NotFoundException("Profile not found")
            throw new InternalServerErrorException("Can't update profile")
        }
        
    }
}

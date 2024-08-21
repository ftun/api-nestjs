import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './profile.schema';
import { Model } from 'mongoose';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile.name) private profileModel: Model<Profile>) {}

    public getProfileData(): Promise<Profile> {
        return this.profileModel.findOne().exec();
    }

    async updateProfile(id: string, updateProfile: UpdateProfileDto): Promise<Profile> {
        const isUpdateProfile = await this.profileModel.findByIdAndUpdate(id, updateProfile)
        if (!isUpdateProfile) throw new NotFoundException(`Profile not found`);
        return isUpdateProfile
    }
}

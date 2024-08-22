import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
// import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }

    @Get()
    async getProfile(@Res() response) {
        try {
            const data = await this.profileService.getProfileData()
            return response.status(HttpStatus.OK).json(data);
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }

    @Patch(":id")
    async updateProfile(
        @Param("id") id: string,
        @Body() body: UpdateProfileDto,
    ) {
        return await this.profileService.updateProfile(id, body)
    }
}

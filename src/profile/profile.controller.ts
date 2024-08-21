import { Body, Controller, Get, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { ProfileService } from './profile.service';
// import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get()
    async getProfile(@Res() response) {
        try {
            const data = await this.profileService.getProfileData()
            return response.status(HttpStatus.OK).json(data);
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }

    @Put(":id")
    async updateProfile(
        @Param("id") id: string,
        @Body() body: UpdateProfileDto,
        @Res() response
    ) {
        try {
            const data = await this.profileService.updateProfile(id, body)
            return response.status(HttpStatus.OK).json(data);
        } catch (error) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

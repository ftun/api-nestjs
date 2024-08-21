import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ProfileService } from './profile.service';

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
}

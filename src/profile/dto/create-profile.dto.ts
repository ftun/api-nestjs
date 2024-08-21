import { ArrayMaxSize, ArrayMinSize, IsArray, isArray, IsString, ValidateNested } from "class-validator";

type socialNetworks = {
    name: string;
    link: string;
}

type experience = {
    date: string;
    job: string;
    company: string;
    description: string;
    technologies: string[]
}

export class CreateProfileDto {

    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @ArrayMaxSize(10)
    socialNetworks: socialNetworks[];

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @ArrayMaxSize(10)
    experience: experience[];
}
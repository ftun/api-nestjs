import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>

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

@Schema()
export class Profile {
    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    socialNetworks: socialNetworks[]

    @Prop()
    experience: experience[]
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)


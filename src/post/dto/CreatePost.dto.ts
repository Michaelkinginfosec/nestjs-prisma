import { IsNotEmpty, IsNumber, IsString, MaxLength, maxLength } from "class-validator";

export class createPostDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    title: string;

    @IsString()
    @IsNotEmpty()
    discription: string;
    
    @IsNumber()
    @IsNotEmpty()
    userId: number;

}
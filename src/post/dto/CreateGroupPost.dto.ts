import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class createGroupPostDto{
        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        @MaxLength(200)
        title: string;
    
        @ApiProperty()
        @IsString()
        @IsNotEmpty()
        discription: string;
        
        @ApiProperty()
        @IsNumber({}, {each: true})
        @IsNotEmpty({each: true})
        @IsArray()
        @ArrayNotEmpty()
        userIds: number[];
    
}
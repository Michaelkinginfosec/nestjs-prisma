import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username : string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    displayName?: string;
}
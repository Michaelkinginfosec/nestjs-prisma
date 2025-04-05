import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
    @ApiProperty()
    @IsString()
    @IsOptional()
    username? : string;
    @ApiProperty()
    @IsString()
    @IsOptional()
    displayName?: string;
}
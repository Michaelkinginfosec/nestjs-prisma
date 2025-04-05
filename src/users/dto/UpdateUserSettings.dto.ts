import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";

export class  UpdateUserSettingsDto {
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    smsEnable?:boolean
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    notificationOn?:boolean
}
import { IsBoolean, IsOptional } from "class-validator";

export class  UpdateUserSettingsDto {
    @IsBoolean()
    @IsOptional()
    smsEnable?:boolean

    @IsBoolean()
    @IsOptional()
    notificationOn?:boolean
}
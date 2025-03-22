import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto} from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { UpdateUserSettingsDto } from './dto/UpdateUserSettings.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}



  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto){
    return this.usersService.createUsers(createUserDto)
  }

  @Get()
  getUsers(){
    return this.usersService.getUsers()
  }

  @Get(":id")
  async getUserById(@Param("id",  ParseIntPipe) id: number){
  const user =  await  this.usersService.getUserById(id);
  if(!user) throw new HttpException("User Not Found", 404);

  return user;
  }

  @Patch(":id")
  updateUserById(@Param("id", ParseIntPipe) id: number,@Body() updateUserDto: UpdateUserDto){
   return  this.usersService.updateUserById(id, updateUserDto)
  }

  @Delete(":id")
  deleteUserById(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }


  //settings with one to one relation with the user

  @Patch(":id/settings")
  @UsePipes(ValidationPipe)
  updateUserSettingsByUserId(@Param("id",  ParseIntPipe) id: number, @Body() data: UpdateUserSettingsDto){
    return this.usersService.updateUserSettings(id, data )
  }

}

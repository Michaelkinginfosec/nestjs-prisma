import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { createPostDto } from './dto/CreatePost.dto';
import { createGroupPostDto } from './dto/CreateGroupPost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() {userId , ...createPostDto}:   createPostDto ){
    return this.postService.createPost(userId,  createPostDto)
  }

  @Post("group")
  @UsePipes(ValidationPipe)
  createGroupPost(@Body() {userIds, ...createGroupPostDto}: createGroupPostDto){
    return this.postService.createGroupPost(userIds, createGroupPostDto)
  }



}

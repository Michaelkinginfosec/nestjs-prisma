import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

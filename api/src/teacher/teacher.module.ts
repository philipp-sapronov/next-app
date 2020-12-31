import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [],
})
export class TeacherModule {}

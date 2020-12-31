import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { Teacher } from './teacher.interface';
import { Language } from '../common/types/Language';
import { teachers } from './data';

type QueryParams = {
  ln: Language;
};

@Controller()
export class TeacherController {
  @Get('/teachers')
  async getTeachers(@Query() query: QueryParams): Promise<Teacher[]> {
    try {
      const ln = query['ln']?.toUpperCase();
      const currentTeachers = teachers[ln];

      if (!currentTeachers) throw new BadRequestException('language');

      return currentTeachers;
    } catch (e) {
      throw e;
    }
  }
}
